import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetQuestionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=app_token" })
  appToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class GetQuestionsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-App-Token" })
  xAppToken?: string;
}


export class GetQuestionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetQuestionsQueryParams;

  @SpeakeasyMetadata()
  headers: GetQuestionsHeaders;
}


export class GetQuestionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
