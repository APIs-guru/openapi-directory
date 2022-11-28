import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Gke
/** 
 * Represents a GKE destination.
**/
export class Gke extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;
}
