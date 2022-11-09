import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Person } from "./person";

export enum BatchUpdateContactsRequestSourcesEnum {
    ReadSourceTypeUnspecified = "READ_SOURCE_TYPE_UNSPECIFIED"
,    ReadSourceTypeProfile = "READ_SOURCE_TYPE_PROFILE"
,    ReadSourceTypeContact = "READ_SOURCE_TYPE_CONTACT"
,    ReadSourceTypeDomainContact = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
}


// BatchUpdateContactsRequest
/** 
 * A request to update a batch of contacts.
**/
export class BatchUpdateContactsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=contacts", elemType: shared.Person })
  contacts?: Map<string, Person>;

  @Metadata({ data: "json, name=readMask" })
  readMask?: string;

  @Metadata({ data: "json, name=sources" })
  sources?: BatchUpdateContactsRequestSourcesEnum[];

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
