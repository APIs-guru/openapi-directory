import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VerifyCheckPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: shared.FormatEnum;
}


export class VerifyCheckRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VerifyCheckPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: shared.CheckRequest;
}


export class VerifyCheckResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyCheck200ApplicationJsonOneOf?: any;
}
