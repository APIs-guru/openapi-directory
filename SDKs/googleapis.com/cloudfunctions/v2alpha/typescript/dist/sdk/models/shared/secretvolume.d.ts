import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SecretVersion } from "./secretversion";
/**
 * Configuration for a secret volume. It has the information necessary to fetch the secret value from secret manager and make it available as files mounted at the requested paths within the application container.
**/
export declare class SecretVolume extends SpeakeasyBase {
    mountPath?: string;
    projectId?: string;
    secret?: string;
    versions?: SecretVersion[];
}
