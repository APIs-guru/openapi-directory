import { SpeakeasyBase } from "../../../internal/utils";
import { StreamingConfig } from "./streamingconfig";
/**
 * Cloud Security Command Center (Cloud SCC) notification configs. A notification config is a Cloud SCC resource that contains the configuration to send notifications for create/update events of findings, assets and etc.
**/
export declare class NotificationConfig extends SpeakeasyBase {
    description?: string;
    name?: string;
    pubsubTopic?: string;
    serviceAccount?: string;
    streamingConfig?: StreamingConfig;
}
/**
 * Cloud Security Command Center (Cloud SCC) notification configs. A notification config is a Cloud SCC resource that contains the configuration to send notifications for create/update events of findings, assets and etc.
**/
export declare class NotificationConfigInput extends SpeakeasyBase {
    description?: string;
    name?: string;
    pubsubTopic?: string;
    streamingConfig?: StreamingConfig;
}
