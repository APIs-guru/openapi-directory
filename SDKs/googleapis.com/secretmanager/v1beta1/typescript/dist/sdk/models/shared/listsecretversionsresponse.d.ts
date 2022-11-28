import { SpeakeasyBase } from "../../../internal/utils";
import { SecretVersion } from "./secretversion";
/**
 * Response message for SecretManagerService.ListSecretVersions.
**/
export declare class ListSecretVersionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    totalSize?: number;
    versions?: SecretVersion[];
}
