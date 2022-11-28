import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateManagedCredentialRequestBodyInput extends SpeakeasyBase {
    label: string;
    password: string;
    username?: string;
}
export declare class CreateManagedCredentialSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateManagedCredentialDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateManagedCredentialRequest extends SpeakeasyBase {
    request?: CreateManagedCredentialRequestBodyInput;
    security: CreateManagedCredentialSecurity;
}
export declare class CreateManagedCredentialResponse extends SpeakeasyBase {
    contentType: string;
    managedCredential?: shared.ManagedCredential;
    statusCode: number;
    createManagedCredentialDefaultApplicationJsonObject?: CreateManagedCredentialDefaultApplicationJson;
}
