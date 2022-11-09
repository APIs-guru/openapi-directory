import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LookupGroupNameResponse
/** 
 * The response message for GroupsService.LookupGroupName.
**/
export class LookupGroupNameResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
