import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssignmentOsType
/** 
 * Defines the criteria for selecting VM Instances by OS type.
**/
export class AssignmentOsType extends SpeakeasyBase {
  @Metadata({ data: "json, name=osArchitecture" })
  osArchitecture?: string;

  @Metadata({ data: "json, name=osShortName" })
  osShortName?: string;

  @Metadata({ data: "json, name=osVersion" })
  osVersion?: string;
}
