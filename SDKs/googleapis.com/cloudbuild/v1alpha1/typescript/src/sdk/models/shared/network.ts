import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Network
/** 
 * Network describes the GCP network used to create workers in.
**/
export class Network extends SpeakeasyBase {
  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=subnetwork" })
  subnetwork?: string;
}
