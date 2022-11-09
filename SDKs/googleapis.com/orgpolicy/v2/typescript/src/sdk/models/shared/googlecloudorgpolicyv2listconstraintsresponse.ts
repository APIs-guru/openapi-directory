import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudOrgpolicyV2Constraint } from "./googlecloudorgpolicyv2constraint";


// GoogleCloudOrgpolicyV2ListConstraintsResponse
/** 
 * The response returned from the ListConstraints method.
**/
export class GoogleCloudOrgpolicyV2ListConstraintsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=constraints", elemType: shared.GoogleCloudOrgpolicyV2Constraint })
  constraints?: GoogleCloudOrgpolicyV2Constraint[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
