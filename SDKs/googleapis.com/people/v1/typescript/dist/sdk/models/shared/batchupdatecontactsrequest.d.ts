import { SpeakeasyBase } from "../../../internal/utils";
import { PersonInput } from "./person";
export declare enum BatchUpdateContactsRequestSourcesEnum {
    ReadSourceTypeUnspecified = "READ_SOURCE_TYPE_UNSPECIFIED",
    ReadSourceTypeProfile = "READ_SOURCE_TYPE_PROFILE",
    ReadSourceTypeContact = "READ_SOURCE_TYPE_CONTACT",
    ReadSourceTypeDomainContact = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
}
/**
 * A request to update a batch of contacts.
**/
export declare class BatchUpdateContactsRequestInput extends SpeakeasyBase {
    contacts?: Map<string, PersonInput>;
    readMask?: string;
    sources?: BatchUpdateContactsRequestSourcesEnum[];
    updateMask?: string;
}
