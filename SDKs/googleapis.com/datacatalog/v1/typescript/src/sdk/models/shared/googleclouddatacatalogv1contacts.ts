import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1ContactsPerson } from "./googleclouddatacatalogv1contactsperson";



// GoogleCloudDatacatalogV1Contacts
/** 
 * Contact people for the entry.
**/
export class GoogleCloudDatacatalogV1Contacts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=people", elemType: GoogleCloudDatacatalogV1ContactsPerson })
  people?: GoogleCloudDatacatalogV1ContactsPerson[];
}
