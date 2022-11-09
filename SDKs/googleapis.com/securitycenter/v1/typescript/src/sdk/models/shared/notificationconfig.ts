import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamingConfig } from "./streamingconfig";


// NotificationConfig
/** 
 * Cloud Security Command Center (Cloud SCC) notification configs. A notification config is a Cloud SCC resource that contains the configuration to send notifications for create/update events of findings, assets and etc.
**/
export class NotificationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pubsubTopic" })
  pubsubTopic?: string;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=streamingConfig" })
  streamingConfig?: StreamingConfig;
}
