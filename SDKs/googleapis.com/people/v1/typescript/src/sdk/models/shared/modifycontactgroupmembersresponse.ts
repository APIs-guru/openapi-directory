import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ModifyContactGroupMembersResponse
/** 
 * The response to a modify contact group members request.
**/
export class ModifyContactGroupMembersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=canNotRemoveLastContactGroupResourceNames" })
  canNotRemoveLastContactGroupResourceNames?: string[];

  @Metadata({ data: "json, name=notFoundResourceNames" })
  notFoundResourceNames?: string[];
}
