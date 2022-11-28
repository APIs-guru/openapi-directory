import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig
/** 
 * AcceleratorConfig defines the accelerator cards to attach to the VM.
**/
export class GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceleratorCount" })
  acceleratorCount?: string;

  @SpeakeasyMetadata({ data: "json, name=acceleratorType" })
  acceleratorType?: string;
}
