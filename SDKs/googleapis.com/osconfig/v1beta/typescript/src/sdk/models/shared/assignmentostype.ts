import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssignmentOsType
/** 
 * Defines the criteria for selecting VM Instances by OS type.
**/
export class AssignmentOsType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=osArchitecture" })
  osArchitecture?: string;

  @SpeakeasyMetadata({ data: "json, name=osShortName" })
  osShortName?: string;

  @SpeakeasyMetadata({ data: "json, name=osVersion" })
  osVersion?: string;
}
