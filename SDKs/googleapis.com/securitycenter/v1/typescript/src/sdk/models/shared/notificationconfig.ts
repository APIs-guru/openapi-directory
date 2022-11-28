import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamingConfig } from "./streamingconfig";



// NotificationConfig
/** 
 * Cloud Security Command Center (Cloud SCC) notification configs. A notification config is a Cloud SCC resource that contains the configuration to send notifications for create/update events of findings, assets and etc.
**/
export class NotificationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pubsubTopic" })
  pubsubTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=streamingConfig" })
  streamingConfig?: StreamingConfig;
}


// NotificationConfigInput
/** 
 * Cloud Security Command Center (Cloud SCC) notification configs. A notification config is a Cloud SCC resource that contains the configuration to send notifications for create/update events of findings, assets and etc.
**/
export class NotificationConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pubsubTopic" })
  pubsubTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=streamingConfig" })
  streamingConfig?: StreamingConfig;
}
