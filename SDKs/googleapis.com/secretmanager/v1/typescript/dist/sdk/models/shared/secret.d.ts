import { SpeakeasyBase } from "../../../internal/utils";
import { Replication } from "./replication";
import { Rotation } from "./rotation";
import { Topic } from "./topic";
/**
 * A Secret is a logical secret whose value and versions can be accessed. A Secret is made up of zero or more SecretVersions that represent the secret data.
**/
export declare class Secret extends SpeakeasyBase {
    annotations?: Map<string, string>;
    createTime?: string;
    etag?: string;
    expireTime?: string;
    labels?: Map<string, string>;
    name?: string;
    replication?: Replication;
    rotation?: Rotation;
    topics?: Topic[];
    ttl?: string;
    versionAliases?: Map<string, string>;
}
/**
 * A Secret is a logical secret whose value and versions can be accessed. A Secret is made up of zero or more SecretVersions that represent the secret data.
**/
export declare class SecretInput extends SpeakeasyBase {
    annotations?: Map<string, string>;
    etag?: string;
    expireTime?: string;
    labels?: Map<string, string>;
    replication?: Replication;
    rotation?: Rotation;
    topics?: Topic[];
    ttl?: string;
    versionAliases?: Map<string, string>;
}
