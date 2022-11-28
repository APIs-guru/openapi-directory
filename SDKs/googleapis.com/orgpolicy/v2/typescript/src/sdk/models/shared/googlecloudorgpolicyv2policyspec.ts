import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudOrgpolicyV2PolicySpecPolicyRule } from "./googlecloudorgpolicyv2policyspecpolicyrule";



// GoogleCloudOrgpolicyV2PolicySpecInput
/** 
 * Defines a Cloud Organization `PolicySpec` which is used to specify `Constraints` for configurations of Cloud Platform resources.
**/
export class GoogleCloudOrgpolicyV2PolicySpecInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=inheritFromParent" })
  inheritFromParent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reset" })
  reset?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: GoogleCloudOrgpolicyV2PolicySpecPolicyRule })
  rules?: GoogleCloudOrgpolicyV2PolicySpecPolicyRule[];
}


// GoogleCloudOrgpolicyV2PolicySpec
/** 
 * Defines a Cloud Organization `PolicySpec` which is used to specify `Constraints` for configurations of Cloud Platform resources.
**/
export class GoogleCloudOrgpolicyV2PolicySpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=inheritFromParent" })
  inheritFromParent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reset" })
  reset?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: GoogleCloudOrgpolicyV2PolicySpecPolicyRule })
  rules?: GoogleCloudOrgpolicyV2PolicySpecPolicyRule[];

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
