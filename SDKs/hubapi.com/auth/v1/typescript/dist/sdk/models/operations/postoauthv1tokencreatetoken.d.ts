import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostOauthV1TokenCreateTokenRequest extends SpeakeasyBase {
    request?: any;
}
export declare class PostOauthV1TokenCreateTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tokenResponseIf?: shared.TokenResponseIf;
}
