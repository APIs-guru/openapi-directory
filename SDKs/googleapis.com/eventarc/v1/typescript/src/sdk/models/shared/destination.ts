import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudRun } from "./cloudrun";
import { Gke } from "./gke";


// Destination
/** 
 * Represents a target of an invocation over HTTP.
**/
export class Destination extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudFunction" })
  cloudFunction?: string;

  @Metadata({ data: "json, name=cloudRun" })
  cloudRun?: CloudRun;

  @Metadata({ data: "json, name=gke" })
  gke?: Gke;

  @Metadata({ data: "json, name=workflow" })
  workflow?: string;
}
