import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";


// RevisionStatus
/** 
 * RevisionStatus communicates the observed state of the Revision (from the controller).
**/
export class RevisionStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=conditions", elemType: shared.GoogleCloudRunV1Condition })
  conditions?: GoogleCloudRunV1Condition[];

  @Metadata({ data: "json, name=imageDigest" })
  imageDigest?: string;

  @Metadata({ data: "json, name=logUrl" })
  logUrl?: string;

  @Metadata({ data: "json, name=observedGeneration" })
  observedGeneration?: number;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
