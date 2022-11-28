import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactToCreateInput } from "./contacttocreate";


export enum BatchCreateContactsRequestSourcesEnum {
    ReadSourceTypeUnspecified = "READ_SOURCE_TYPE_UNSPECIFIED",
    ReadSourceTypeProfile = "READ_SOURCE_TYPE_PROFILE",
    ReadSourceTypeContact = "READ_SOURCE_TYPE_CONTACT",
    ReadSourceTypeDomainContact = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
}


// BatchCreateContactsRequestInput
/** 
 * A request to create a batch of contacts.
**/
export class BatchCreateContactsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contacts", elemType: ContactToCreateInput })
  contacts?: ContactToCreateInput[];

  @SpeakeasyMetadata({ data: "json, name=readMask" })
  readMask?: string;

  @SpeakeasyMetadata({ data: "json, name=sources" })
  sources?: BatchCreateContactsRequestSourcesEnum[];
}
