import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateManagedCredentialPathParams extends SpeakeasyBase {
    credentialId: number;
}
export declare class UpdateManagedCredentialSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateManagedCredentialDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateManagedCredentialRequest extends SpeakeasyBase {
    pathParams: UpdateManagedCredentialPathParams;
    request: shared.ManagedCredentialInput;
    security: UpdateManagedCredentialSecurity;
}
export declare class UpdateManagedCredentialResponse extends SpeakeasyBase {
    contentType: string;
    managedCredential?: shared.ManagedCredential;
    statusCode: number;
    updateManagedCredentialDefaultApplicationJsonObject?: UpdateManagedCredentialDefaultApplicationJson;
}
