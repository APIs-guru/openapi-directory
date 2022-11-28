import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecretsSecretRolesCreateRequest extends SpeakeasyBase {
    request: shared.SecretRoleInput;
}
export declare class SecretsSecretRolesCreateResponse extends SpeakeasyBase {
    contentType: string;
    secretRole?: shared.SecretRole;
    statusCode: number;
}
