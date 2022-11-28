import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuntimeAcceleratorConfig } from "./runtimeacceleratorconfig";



// SwitchRuntimeRequest
/** 
 * Request for switching a Managed Notebook Runtime.
**/
export class SwitchRuntimeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceleratorConfig" })
  acceleratorConfig?: RuntimeAcceleratorConfig;

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
