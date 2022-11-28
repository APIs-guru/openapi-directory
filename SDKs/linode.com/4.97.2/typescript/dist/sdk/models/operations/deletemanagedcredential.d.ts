import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteManagedCredentialPathParams extends SpeakeasyBase {
    credentialId: number;
}
export declare class DeleteManagedCredentialSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteManagedCredentialDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteManagedCredentialRequest extends SpeakeasyBase {
    pathParams: DeleteManagedCredentialPathParams;
    security: DeleteManagedCredentialSecurity;
}
export declare class DeleteManagedCredentialResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteManagedCredential200ApplicationJsonObject?: Map<string, any>;
    deleteManagedCredentialDefaultApplicationJsonObject?: DeleteManagedCredentialDefaultApplicationJson;
}
