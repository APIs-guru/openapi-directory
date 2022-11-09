import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RuntimeInfo
/** 
 * Runtime information about workload execution.
**/
export class RuntimeInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=diagnosticOutputUri" })
  diagnosticOutputUri?: string;

  @Metadata({ data: "json, name=endpoints" })
  endpoints?: Map<string, string>;

  @Metadata({ data: "json, name=outputUri" })
  outputUri?: string;
}
