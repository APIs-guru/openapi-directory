import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecommenderV1ValueMatcher
/** 
 * Contains various matching options for values for a GCP resource field.
**/
export class GoogleCloudRecommenderV1ValueMatcher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matchesPattern" })
  matchesPattern?: string;
}
