import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecretsSecretRolesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class SecretsSecretRolesUpdateRequest extends SpeakeasyBase {
    pathParams: SecretsSecretRolesUpdatePathParams;
    request: shared.SecretRoleInput;
}
export declare class SecretsSecretRolesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    secretRole?: shared.SecretRole;
    statusCode: number;
}
