import { SpeakeasyBase } from "../../../internal/utils";
import { Replication } from "./replication";
/**
 * A Secret is a logical secret whose value and versions can be accessed. A Secret is made up of zero or more SecretVersions that represent the secret data.
**/
export declare class Secret extends SpeakeasyBase {
    createTime?: string;
    labels?: Map<string, string>;
    name?: string;
    replication?: Replication;
}
/**
 * A Secret is a logical secret whose value and versions can be accessed. A Secret is made up of zero or more SecretVersions that represent the secret data.
**/
export declare class SecretInput extends SpeakeasyBase {
    labels?: Map<string, string>;
    replication?: Replication;
}
