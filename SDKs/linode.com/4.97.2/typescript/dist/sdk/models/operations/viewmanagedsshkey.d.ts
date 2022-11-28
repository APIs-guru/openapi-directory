import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ViewManagedSshKeySecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
/**
 * A unique SSH public key that allows Linode's special forces to access a Managed server to respond to Issues.
 *
**/
export declare class ViewManagedSshKey200ApplicationJson extends SpeakeasyBase {
    sshKey?: string;
}
export declare class ViewManagedSshKeyDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class ViewManagedSshKeyRequest extends SpeakeasyBase {
    security: ViewManagedSshKeySecurity;
}
export declare class ViewManagedSshKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    viewManagedSshKey200ApplicationJsonObject?: ViewManagedSshKey200ApplicationJson;
    viewManagedSshKeyDefaultApplicationJsonObject?: ViewManagedSshKeyDefaultApplicationJson;
}
