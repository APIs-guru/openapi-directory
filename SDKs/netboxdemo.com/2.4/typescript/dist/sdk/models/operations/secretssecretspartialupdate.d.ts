import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecretsSecretsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class SecretsSecretsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: SecretsSecretsPartialUpdatePathParams;
    request: shared.WritableSecretInput;
}
export declare class SecretsSecretsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    secret?: shared.Secret;
    statusCode: number;
}
