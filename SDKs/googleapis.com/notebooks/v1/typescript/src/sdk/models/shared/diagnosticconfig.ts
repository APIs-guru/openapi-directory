import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DiagnosticConfig
/** 
 * Defines flags that are used to run the diagnostic tool
**/
export class DiagnosticConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyHomeFilesFlagEnabled" })
  copyHomeFilesFlagEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=gcsBucket" })
  gcsBucket?: string;

  @SpeakeasyMetadata({ data: "json, name=packetCaptureFlagEnabled" })
  packetCaptureFlagEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=relativePath" })
  relativePath?: string;

  @SpeakeasyMetadata({ data: "json, name=repairFlagEnabled" })
  repairFlagEnabled?: boolean;
}
