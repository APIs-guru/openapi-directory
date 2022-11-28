import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyResourceGroup } from "./ospolicyresourcegroup";


export enum OsPolicyModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Validation = "VALIDATION",
    Enforcement = "ENFORCEMENT"
}


// OsPolicy
/** 
 * An OS policy defines the desired state configuration for a VM.
**/
export class OsPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowNoResourceGroupMatch" })
  allowNoResourceGroupMatch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: OsPolicyModeEnum;

  @SpeakeasyMetadata({ data: "json, name=resourceGroups", elemType: OsPolicyResourceGroup })
  resourceGroups?: OsPolicyResourceGroup[];
}
