import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message for IntrospectToken.
**/
export declare class GoogleIdentityStsV1IntrospectTokenResponse extends SpeakeasyBase {
    active?: boolean;
    clientId?: string;
    exp?: string;
    iat?: string;
    iss?: string;
    scope?: string;
    sub?: string;
    username?: string;
}
