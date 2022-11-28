import { SpeakeasyBase } from "../../../internal/utils";
import { ContactToCreateInput } from "./contacttocreate";
export declare enum BatchCreateContactsRequestSourcesEnum {
    ReadSourceTypeUnspecified = "READ_SOURCE_TYPE_UNSPECIFIED",
    ReadSourceTypeProfile = "READ_SOURCE_TYPE_PROFILE",
    ReadSourceTypeContact = "READ_SOURCE_TYPE_CONTACT",
    ReadSourceTypeDomainContact = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
}
/**
 * A request to create a batch of contacts.
**/
export declare class BatchCreateContactsRequestInput extends SpeakeasyBase {
    contacts?: ContactToCreateInput[];
    readMask?: string;
    sources?: BatchCreateContactsRequestSourcesEnum[];
}
