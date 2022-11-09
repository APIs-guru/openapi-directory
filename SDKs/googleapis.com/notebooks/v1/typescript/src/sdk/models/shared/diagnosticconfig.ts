import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DiagnosticConfig
/** 
 * Defines flags that are used to run the diagnostic tool
**/
export class DiagnosticConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyHomeFilesFlagEnabled" })
  copyHomeFilesFlagEnabled?: boolean;

  @Metadata({ data: "json, name=gcsBucket" })
  gcsBucket?: string;

  @Metadata({ data: "json, name=packetCaptureFlagEnabled" })
  packetCaptureFlagEnabled?: boolean;

  @Metadata({ data: "json, name=relativePath" })
  relativePath?: string;

  @Metadata({ data: "json, name=repairFlagEnabled" })
  repairFlagEnabled?: boolean;
}
