import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudRun } from "./cloudrun";
import { Gke } from "./gke";



// Destination
/** 
 * Represents a target of an invocation over HTTP.
**/
export class Destination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudFunction" })
  cloudFunction?: string;

  @SpeakeasyMetadata({ data: "json, name=cloudRun" })
  cloudRun?: CloudRun;

  @SpeakeasyMetadata({ data: "json, name=gke" })
  gke?: Gke;

  @SpeakeasyMetadata({ data: "json, name=workflow" })
  workflow?: string;
}
