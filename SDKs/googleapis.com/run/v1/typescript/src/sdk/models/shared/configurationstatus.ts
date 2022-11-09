import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";


// ConfigurationStatus
/** 
 * ConfigurationStatus communicates the observed state of the Configuration (from the controller).
**/
export class ConfigurationStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=conditions", elemType: shared.GoogleCloudRunV1Condition })
  conditions?: GoogleCloudRunV1Condition[];

  @Metadata({ data: "json, name=latestCreatedRevisionName" })
  latestCreatedRevisionName?: string;

  @Metadata({ data: "json, name=latestReadyRevisionName" })
  latestReadyRevisionName?: string;

  @Metadata({ data: "json, name=observedGeneration" })
  observedGeneration?: number;
}
