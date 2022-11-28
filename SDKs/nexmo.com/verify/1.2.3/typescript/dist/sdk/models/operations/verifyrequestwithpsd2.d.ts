import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VerifyRequestWithPsd2PathParams extends SpeakeasyBase {
    format: shared.FormatEnum;
}
export declare class VerifyRequestWithPsd2Request extends SpeakeasyBase {
    pathParams: VerifyRequestWithPsd2PathParams;
    request: shared.Psd2Request;
}
export declare class VerifyRequestWithPsd2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyRequestWithPsd2200ApplicationJsonOneOf?: any;
}
