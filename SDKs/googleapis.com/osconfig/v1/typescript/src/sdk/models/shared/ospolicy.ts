import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OsPolicyResourceGroup } from "./ospolicyresourcegroup";

export enum OsPolicyModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED"
,    Validation = "VALIDATION"
,    Enforcement = "ENFORCEMENT"
}


// OsPolicy
/** 
 * An OS policy defines the desired state configuration for a VM.
**/
export class OsPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowNoResourceGroupMatch" })
  allowNoResourceGroupMatch?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=mode" })
  mode?: OsPolicyModeEnum;

  @Metadata({ data: "json, name=resourceGroups", elemType: shared.OsPolicyResourceGroup })
  resourceGroups?: OsPolicyResourceGroup[];
}
