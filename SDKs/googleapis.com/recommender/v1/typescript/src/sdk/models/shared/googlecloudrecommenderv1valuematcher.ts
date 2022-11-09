import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRecommenderV1ValueMatcher
/** 
 * Contains various matching options for values for a GCP resource field.
**/
export class GoogleCloudRecommenderV1ValueMatcher extends SpeakeasyBase {
  @Metadata({ data: "json, name=matchesPattern" })
  matchesPattern?: string;
}
