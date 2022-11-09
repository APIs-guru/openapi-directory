import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudOrgpolicyV2CustomConstraint } from "./googlecloudorgpolicyv2customconstraint";


// GoogleCloudOrgpolicyV2ListCustomConstraintsResponse
/** 
 * The response returned from the ListCustomConstraints method. It will be empty if no `CustomConstraints` are set on the organization resource.
**/
export class GoogleCloudOrgpolicyV2ListCustomConstraintsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=customConstraints", elemType: shared.GoogleCloudOrgpolicyV2CustomConstraint })
  customConstraints?: GoogleCloudOrgpolicyV2CustomConstraint[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
