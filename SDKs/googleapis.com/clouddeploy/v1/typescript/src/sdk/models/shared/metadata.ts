import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudRunMetadata } from "./cloudrunmetadata";



// Metadata
/** 
 * Metadata includes information associated with a `Rollout`.
**/
export class Metadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudRun" })
  cloudRun?: CloudRunMetadata;
}
