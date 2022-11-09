import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig
/** 
 * AcceleratorConfig defines the accelerator cards to attach to the VM.
**/
export class GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceleratorCount" })
  acceleratorCount?: string;

  @Metadata({ data: "json, name=acceleratorType" })
  acceleratorType?: string;
}
