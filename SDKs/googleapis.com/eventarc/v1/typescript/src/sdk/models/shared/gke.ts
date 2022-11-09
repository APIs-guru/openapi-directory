import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Gke
/** 
 * Represents a GKE destination.
**/
export class Gke extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=namespace" })
  namespace?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=service" })
  service?: string;
}
