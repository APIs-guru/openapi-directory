import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecretsSecretRolesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class SecretsSecretRolesReadRequest extends SpeakeasyBase {
    pathParams: SecretsSecretRolesReadPathParams;
}
export declare class SecretsSecretRolesReadResponse extends SpeakeasyBase {
    contentType: string;
    secretRole?: shared.SecretRole;
    statusCode: number;
}
