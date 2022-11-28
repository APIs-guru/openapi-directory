import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecretsSecretsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class SecretsSecretsUpdateRequest extends SpeakeasyBase {
    pathParams: SecretsSecretsUpdatePathParams;
    request: shared.WritableSecretInput;
}
export declare class SecretsSecretsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    secret?: shared.Secret;
    statusCode: number;
}
