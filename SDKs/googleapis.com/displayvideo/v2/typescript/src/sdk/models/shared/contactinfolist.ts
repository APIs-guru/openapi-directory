import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactInfo } from "./contactinfo";



// ContactInfoList
/** 
 * Wrapper message for a list of contact information defining Customer Match audience members.
**/
export class ContactInfoList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactInfos", elemType: ContactInfo })
  contactInfos?: ContactInfo[];
}
