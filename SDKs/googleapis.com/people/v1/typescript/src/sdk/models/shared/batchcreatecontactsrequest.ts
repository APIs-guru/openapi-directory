import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContactToCreate } from "./contacttocreate";

export enum BatchCreateContactsRequestSourcesEnum {
    ReadSourceTypeUnspecified = "READ_SOURCE_TYPE_UNSPECIFIED"
,    ReadSourceTypeProfile = "READ_SOURCE_TYPE_PROFILE"
,    ReadSourceTypeContact = "READ_SOURCE_TYPE_CONTACT"
,    ReadSourceTypeDomainContact = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
}


// BatchCreateContactsRequest
/** 
 * A request to create a batch of contacts.
**/
export class BatchCreateContactsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=contacts", elemType: shared.ContactToCreate })
  contacts?: ContactToCreate[];

  @Metadata({ data: "json, name=readMask" })
  readMask?: string;

  @Metadata({ data: "json, name=sources" })
  sources?: BatchCreateContactsRequestSourcesEnum[];
}
