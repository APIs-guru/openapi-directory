import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LookupGroupNameResponse
/** 
 * The response message for GroupsService.LookupGroupName.
**/
export class LookupGroupNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
