import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudOrgpolicyV2CustomConstraint } from "./googlecloudorgpolicyv2customconstraint";



// GoogleCloudOrgpolicyV2ListCustomConstraintsResponse
/** 
 * The response returned from the ListCustomConstraints method. It will be empty if no `CustomConstraints` are set on the organization resource.
**/
export class GoogleCloudOrgpolicyV2ListCustomConstraintsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customConstraints", elemType: GoogleCloudOrgpolicyV2CustomConstraint })
  customConstraints?: GoogleCloudOrgpolicyV2CustomConstraint[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
