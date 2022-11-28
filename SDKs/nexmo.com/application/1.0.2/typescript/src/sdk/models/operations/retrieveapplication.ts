import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RetrieveApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;
}


export class RetrieveApplicationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_secret" })
  apiSecret: string;
}


export class RetrieveApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveApplicationPathParams;

  @SpeakeasyMetadata()
  queryParams: RetrieveApplicationQueryParams;
}


export class RetrieveApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  application?: shared.Application;
}
