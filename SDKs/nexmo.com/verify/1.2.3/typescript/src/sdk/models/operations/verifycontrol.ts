import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VerifyControlPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: shared.FormatEnum;
}


export class VerifyControlRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VerifyControlPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: shared.ControlRequest;
}


export class VerifyControlResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyControl200ApplicationJsonOneOf?: any;
}
