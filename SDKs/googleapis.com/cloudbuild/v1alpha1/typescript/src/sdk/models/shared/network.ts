import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Network
/** 
 * Network describes the GCP network used to create workers in.
**/
export class Network extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=subnetwork" })
  subnetwork?: string;
}
