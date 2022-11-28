import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PersonInput } from "./person";


export enum BatchUpdateContactsRequestSourcesEnum {
    ReadSourceTypeUnspecified = "READ_SOURCE_TYPE_UNSPECIFIED",
    ReadSourceTypeProfile = "READ_SOURCE_TYPE_PROFILE",
    ReadSourceTypeContact = "READ_SOURCE_TYPE_CONTACT",
    ReadSourceTypeDomainContact = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
}


// BatchUpdateContactsRequestInput
/** 
 * A request to update a batch of contacts.
**/
export class BatchUpdateContactsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contacts", elemType: PersonInput })
  contacts?: Map<string, PersonInput>;

  @SpeakeasyMetadata({ data: "json, name=readMask" })
  readMask?: string;

  @SpeakeasyMetadata({ data: "json, name=sources" })
  sources?: BatchUpdateContactsRequestSourcesEnum[];

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
