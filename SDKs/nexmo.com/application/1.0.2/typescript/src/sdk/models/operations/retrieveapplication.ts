import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveApplicationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;
}


export class RetrieveApplicationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=api_secret" })
  apiSecret: string;
}


export class RetrieveApplicationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveApplicationPathParams;

  @Metadata()
  queryParams: RetrieveApplicationQueryParams;
}


export class RetrieveApplicationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  application?: shared.Application;
}
