import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";



// ConfigurationStatus
/** 
 * ConfigurationStatus communicates the observed state of the Configuration (from the controller).
**/
export class ConfigurationStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conditions", elemType: GoogleCloudRunV1Condition })
  conditions?: GoogleCloudRunV1Condition[];

  @SpeakeasyMetadata({ data: "json, name=latestCreatedRevisionName" })
  latestCreatedRevisionName?: string;

  @SpeakeasyMetadata({ data: "json, name=latestReadyRevisionName" })
  latestReadyRevisionName?: string;

  @SpeakeasyMetadata({ data: "json, name=observedGeneration" })
  observedGeneration?: number;
}
