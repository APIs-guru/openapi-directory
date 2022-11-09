import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VerifyRequestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: shared.FormatEnum;
}


export class VerifyRequestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VerifyRequestPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: shared.VerifyRequest;
}


export class VerifyRequestResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyRequest200ApplicationJsonOneOf?: any;
}
