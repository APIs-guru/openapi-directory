import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to verify a custom token
**/
export declare class IdentitytoolkitRelyingpartyVerifyCustomTokenRequest extends SpeakeasyBase {
    delegatedProjectNumber?: string;
    instanceId?: string;
    returnSecureToken?: boolean;
    token?: string;
}
