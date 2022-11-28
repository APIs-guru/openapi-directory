import { SpeakeasyBase } from "../../../internal/utils";
import { Secret } from "./secret";
/**
 * Response message for SecretManagerService.ListSecrets.
**/
export declare class ListSecretsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    secrets?: Secret[];
    totalSize?: number;
}
