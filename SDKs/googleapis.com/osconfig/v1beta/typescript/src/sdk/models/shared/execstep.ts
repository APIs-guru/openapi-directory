import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecStepConfig } from "./execstepconfig";



// ExecStep
/** 
 * A step that runs an executable for a PatchJob.
**/
export class ExecStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=linuxExecStepConfig" })
  linuxExecStepConfig?: ExecStepConfig;

  @SpeakeasyMetadata({ data: "json, name=windowsExecStepConfig" })
  windowsExecStepConfig?: ExecStepConfig;
}
