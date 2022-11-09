import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatacatalogV1PersonalDetails
/** 
 * Entry metadata relevant only to the user and private to them.
**/
export class GoogleCloudDatacatalogV1PersonalDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=starTime" })
  starTime?: string;

  @Metadata({ data: "json, name=starred" })
  starred?: boolean;
}
