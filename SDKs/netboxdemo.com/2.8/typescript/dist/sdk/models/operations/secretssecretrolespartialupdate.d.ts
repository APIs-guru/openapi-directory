import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecretsSecretRolesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class SecretsSecretRolesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: SecretsSecretRolesPartialUpdatePathParams;
    request: shared.SecretRoleInput;
}
export declare class SecretsSecretRolesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    secretRole?: shared.SecretRole;
    statusCode: number;
}
