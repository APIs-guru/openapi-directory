import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetManagedCredentialPathParams extends SpeakeasyBase {
    credentialId: number;
}
export declare class GetManagedCredentialSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetManagedCredentialDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetManagedCredentialRequest extends SpeakeasyBase {
    pathParams: GetManagedCredentialPathParams;
    security: GetManagedCredentialSecurity;
}
export declare class GetManagedCredentialResponse extends SpeakeasyBase {
    contentType: string;
    managedCredential?: shared.ManagedCredential;
    statusCode: number;
    getManagedCredentialDefaultApplicationJsonObject?: GetManagedCredentialDefaultApplicationJson;
}
