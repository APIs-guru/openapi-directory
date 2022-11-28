import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecretsSecretsCreateRequest extends SpeakeasyBase {
    request: shared.WritableSecretInput;
}
export declare class SecretsSecretsCreateResponse extends SpeakeasyBase {
    contentType: string;
    secret?: shared.Secret;
    statusCode: number;
}
