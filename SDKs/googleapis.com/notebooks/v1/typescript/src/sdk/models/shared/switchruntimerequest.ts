import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuntimeAcceleratorConfig } from "./runtimeacceleratorconfig";


// SwitchRuntimeRequest
/** 
 * Request for switching a Managed Notebook Runtime.
**/
export class SwitchRuntimeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceleratorConfig" })
  acceleratorConfig?: RuntimeAcceleratorConfig;

  @Metadata({ data: "json, name=machineType" })
  machineType?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
