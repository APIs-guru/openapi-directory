import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModifyContactGroupMembersResponse
/** 
 * The response to a modify contact group members request.
**/
export class ModifyContactGroupMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canNotRemoveLastContactGroupResourceNames" })
  canNotRemoveLastContactGroupResourceNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=notFoundResourceNames" })
  notFoundResourceNames?: string[];
}
