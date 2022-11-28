import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudOrgpolicyV2Constraint } from "./googlecloudorgpolicyv2constraint";



// GoogleCloudOrgpolicyV2ListConstraintsResponse
/** 
 * The response returned from the ListConstraints method.
**/
export class GoogleCloudOrgpolicyV2ListConstraintsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=constraints", elemType: GoogleCloudOrgpolicyV2Constraint })
  constraints?: GoogleCloudOrgpolicyV2Constraint[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
