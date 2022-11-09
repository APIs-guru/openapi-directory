import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VerifyRequestWithPsd2PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: shared.FormatEnum;
}


export class VerifyRequestWithPsd2Request extends SpeakeasyBase {
  @Metadata()
  pathParams: VerifyRequestWithPsd2PathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: shared.Psd2Request;
}


export class VerifyRequestWithPsd2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyRequestWithPsd2200ApplicationJsonOneOf?: any;
}
