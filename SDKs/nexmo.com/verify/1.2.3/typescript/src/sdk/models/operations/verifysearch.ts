import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VerifySearchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: shared.FormatEnum;
}


export class VerifySearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=api_secret" })
  apiSecret: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=request_id" })
  requestId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=request_ids" })
  requestIds?: string[];
}


export class VerifySearchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VerifySearchPathParams;

  @Metadata()
  queryParams: VerifySearchQueryParams;
}


export class VerifySearchResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifySearch200ApplicationJsonOneOf?: any;
}
