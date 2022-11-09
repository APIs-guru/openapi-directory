import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatacatalogV1Contacts } from "./googleclouddatacatalogv1contacts";


// GoogleCloudDatacatalogV1ModifyEntryContactsRequest
/** 
 * Request message for ModifyEntryContacts.
**/
export class GoogleCloudDatacatalogV1ModifyEntryContactsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=contacts" })
  contacts?: GoogleCloudDatacatalogV1Contacts;
}
