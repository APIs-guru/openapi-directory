import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Telemetry
/** 
 * Configuration for how to query telemetry on a Service.
**/
export class Telemetry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;
}
