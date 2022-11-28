import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VerifyRequestWithPsd2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: shared.FormatEnum;
}


export class VerifyRequestWithPsd2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VerifyRequestWithPsd2PathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: shared.Psd2Request;
}


export class VerifyRequestWithPsd2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verifyRequestWithPsd2200ApplicationJsonOneOf?: any;
}
