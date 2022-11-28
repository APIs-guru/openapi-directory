import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";



// RevisionStatus
/** 
 * RevisionStatus communicates the observed state of the Revision (from the controller).
**/
export class RevisionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conditions", elemType: GoogleCloudRunV1Condition })
  conditions?: GoogleCloudRunV1Condition[];

  @SpeakeasyMetadata({ data: "json, name=imageDigest" })
  imageDigest?: string;

  @SpeakeasyMetadata({ data: "json, name=logUrl" })
  logUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=observedGeneration" })
  observedGeneration?: number;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
