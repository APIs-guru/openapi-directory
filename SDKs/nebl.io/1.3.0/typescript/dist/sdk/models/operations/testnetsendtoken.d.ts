import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TestnetSendTokenRequest extends SpeakeasyBase {
    request: shared.SendTokenRequest;
}
export declare class TestnetSendTokenResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    sendTokenResponse?: shared.SendTokenResponse;
}
