import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VerifySearchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: shared.FormatEnum;
}


export class VerifySearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_secret" })
  apiSecret: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=request_id" })
  requestId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=request_ids" })
  requestIds?: string[];
}


export class VerifySearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VerifySearchPathParams;

  @SpeakeasyMetadata()
  queryParams: VerifySearchQueryParams;
}


export class VerifySearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verifySearch200ApplicationJsonOneOf?: any;
}
