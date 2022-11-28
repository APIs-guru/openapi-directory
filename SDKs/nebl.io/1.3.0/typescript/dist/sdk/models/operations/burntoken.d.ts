import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BurnTokenRequest extends SpeakeasyBase {
    request: shared.BurnTokenRequest;
}
export declare class BurnTokenResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    burnTokenResponse?: shared.BurnTokenResponse;
}
