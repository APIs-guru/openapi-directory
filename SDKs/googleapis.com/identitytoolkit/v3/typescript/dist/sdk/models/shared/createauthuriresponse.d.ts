import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response of creating the IDP authentication URL.
**/
export declare class CreateAuthUriResponse extends SpeakeasyBase {
    allProviders?: string[];
    authUri?: string;
    captchaRequired?: boolean;
    forExistingProvider?: boolean;
    kind?: string;
    providerId?: string;
    registered?: boolean;
    sessionId?: string;
    signinMethods?: string[];
}
