import { SpeakeasyBase } from "../../../internal/utils";
import { SecretVersion } from "./secretversion";
/**
 * Configuration for a secret volume. It has the information necessary to fetch the secret value from secret manager and make it available as files mounted at the requested paths within the application container. Secret value is not a part of the configuration. Every filesystem read operation performs a lookup in secret manager to retrieve the secret value.
**/
export declare class SecretVolume extends SpeakeasyBase {
    mountPath?: string;
    projectId?: string;
    secret?: string;
    versions?: SecretVersion[];
}
