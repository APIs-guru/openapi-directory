import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatacatalogV1ContactsPerson
/** 
 * A contact person for the entry.
**/
export class GoogleCloudDatacatalogV1ContactsPerson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=designation" })
  designation?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;
}
