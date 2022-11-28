import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1Contacts } from "./googleclouddatacatalogv1contacts";



// GoogleCloudDatacatalogV1ModifyEntryContactsRequest
/** 
 * Request message for ModifyEntryContacts.
**/
export class GoogleCloudDatacatalogV1ModifyEntryContactsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contacts" })
  contacts?: GoogleCloudDatacatalogV1Contacts;
}
