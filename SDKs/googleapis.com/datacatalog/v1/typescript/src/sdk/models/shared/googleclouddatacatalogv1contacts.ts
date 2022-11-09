import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1ContactsPerson } from "./googleclouddatacatalogv1contactsperson";


// GoogleCloudDatacatalogV1Contacts
/** 
 * Contact people for the entry.
**/
export class GoogleCloudDatacatalogV1Contacts extends SpeakeasyBase {
  @Metadata({ data: "json, name=people", elemType: shared.GoogleCloudDatacatalogV1ContactsPerson })
  people?: GoogleCloudDatacatalogV1ContactsPerson[];
}
