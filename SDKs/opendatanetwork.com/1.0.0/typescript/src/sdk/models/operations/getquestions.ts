import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetQuestionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=app_token" })
  appToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class GetQuestionsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-App-Token" })
  xAppToken?: string;
}


export class GetQuestionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetQuestionsQueryParams;

  @Metadata()
  headers: GetQuestionsHeaders;
}


export class GetQuestionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
