import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudRunMetadata } from "./cloudrunmetadata";


// Metadata
/** 
 * Metadata includes information associated with a `Rollout`.
**/
export class Metadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudRun" })
  cloudRun?: CloudRunMetadata;
}
