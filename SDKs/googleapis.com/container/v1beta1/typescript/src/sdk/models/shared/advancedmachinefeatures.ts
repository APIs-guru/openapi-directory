import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdvancedMachineFeatures
/** 
 * Specifies options for controlling advanced machine features.
**/
export class AdvancedMachineFeatures extends SpeakeasyBase {
  @Metadata({ data: "json, name=threadsPerCore" })
  threadsPerCore?: string;
}
