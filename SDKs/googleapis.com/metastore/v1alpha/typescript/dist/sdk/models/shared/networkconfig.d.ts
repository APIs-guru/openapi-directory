import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumerInput } from "./consumer";
import { Consumer } from "./consumer";
/**
 * Network configuration for the Dataproc Metastore service.
**/
export declare class NetworkConfigInput extends SpeakeasyBase {
    consumers?: ConsumerInput[];
}
/**
 * Network configuration for the Dataproc Metastore service.
**/
export declare class NetworkConfig extends SpeakeasyBase {
    consumers?: Consumer[];
}
