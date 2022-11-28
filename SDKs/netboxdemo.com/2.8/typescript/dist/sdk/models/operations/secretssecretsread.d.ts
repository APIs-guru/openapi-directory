import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecretsSecretsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class SecretsSecretsReadRequest extends SpeakeasyBase {
    pathParams: SecretsSecretsReadPathParams;
}
export declare class SecretsSecretsReadResponse extends SpeakeasyBase {
    contentType: string;
    secret?: shared.Secret;
    statusCode: number;
}
