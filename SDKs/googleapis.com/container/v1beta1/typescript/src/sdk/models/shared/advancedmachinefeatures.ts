import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdvancedMachineFeatures
/** 
 * Specifies options for controlling advanced machine features.
**/
export class AdvancedMachineFeatures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=threadsPerCore" })
  threadsPerCore?: string;
}
