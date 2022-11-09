import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatacatalogV1ContactsPerson
/** 
 * A contact person for the entry.
**/
export class GoogleCloudDatacatalogV1ContactsPerson extends SpeakeasyBase {
  @Metadata({ data: "json, name=designation" })
  designation?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;
}
