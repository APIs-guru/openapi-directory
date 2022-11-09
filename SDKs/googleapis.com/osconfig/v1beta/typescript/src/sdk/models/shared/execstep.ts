import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExecStepConfig } from "./execstepconfig";
import { ExecStepConfig } from "./execstepconfig";


// ExecStep
/** 
 * A step that runs an executable for a PatchJob.
**/
export class ExecStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=linuxExecStepConfig" })
  linuxExecStepConfig?: ExecStepConfig;

  @Metadata({ data: "json, name=windowsExecStepConfig" })
  windowsExecStepConfig?: ExecStepConfig;
}
