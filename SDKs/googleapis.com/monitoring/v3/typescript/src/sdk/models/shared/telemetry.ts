import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Telemetry
/** 
 * Configuration for how to query telemetry on a Service.
**/
export class Telemetry extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;
}
