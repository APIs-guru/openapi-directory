import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudOrgpolicyV2PolicySpecPolicyRule } from "./googlecloudorgpolicyv2policyspecpolicyrule";


// GoogleCloudOrgpolicyV2PolicySpec
/** 
 * Defines a Cloud Organization `PolicySpec` which is used to specify `Constraints` for configurations of Cloud Platform resources.
**/
export class GoogleCloudOrgpolicyV2PolicySpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=inheritFromParent" })
  inheritFromParent?: boolean;

  @Metadata({ data: "json, name=reset" })
  reset?: boolean;

  @Metadata({ data: "json, name=rules", elemType: shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule })
  rules?: GoogleCloudOrgpolicyV2PolicySpecPolicyRule[];

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
