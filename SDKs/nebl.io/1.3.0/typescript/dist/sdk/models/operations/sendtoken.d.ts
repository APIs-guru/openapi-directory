import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SendTokenRequest extends SpeakeasyBase {
    request: shared.SendTokenRequest;
}
export declare class SendTokenResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    sendTokenResponse?: shared.SendTokenResponse;
}
