import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContactInfo } from "./contactinfo";


// ContactInfoList
/** 
 * Wrapper message for a list of contact information defining Customer Match audience members.
**/
export class ContactInfoList extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactInfos", elemType: shared.ContactInfo })
  contactInfos?: ContactInfo[];
}
