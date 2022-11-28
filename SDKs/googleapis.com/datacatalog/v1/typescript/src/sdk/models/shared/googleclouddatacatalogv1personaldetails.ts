import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatacatalogV1PersonalDetails
/** 
 * Entry metadata relevant only to the user and private to them.
**/
export class GoogleCloudDatacatalogV1PersonalDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=starTime" })
  starTime?: string;

  @SpeakeasyMetadata({ data: "json, name=starred" })
  starred?: boolean;
}
