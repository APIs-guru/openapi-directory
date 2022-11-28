import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateManagedCredentialUsernamePasswordPathParams extends SpeakeasyBase {
    credentialId: number;
}
export declare class UpdateManagedCredentialUsernamePasswordSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateManagedCredentialUsernamePasswordDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateManagedCredentialUsernamePasswordRequest extends SpeakeasyBase {
    pathParams: UpdateManagedCredentialUsernamePasswordPathParams;
    request?: any;
    security: UpdateManagedCredentialUsernamePasswordSecurity;
}
export declare class UpdateManagedCredentialUsernamePasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateManagedCredentialUsernamePassword200ApplicationJsonObject?: Map<string, any>;
    updateManagedCredentialUsernamePasswordDefaultApplicationJsonObject?: UpdateManagedCredentialUsernamePasswordDefaultApplicationJson;
}
