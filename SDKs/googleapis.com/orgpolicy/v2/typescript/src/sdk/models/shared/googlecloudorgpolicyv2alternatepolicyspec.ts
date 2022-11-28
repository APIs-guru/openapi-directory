import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudOrgpolicyV2PolicySpecInput } from "./googlecloudorgpolicyv2policyspec";
import { GoogleCloudOrgpolicyV2PolicySpec } from "./googlecloudorgpolicyv2policyspec";



// GoogleCloudOrgpolicyV2AlternatePolicySpecInput
/** 
 * Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch.
**/
export class GoogleCloudOrgpolicyV2AlternatePolicySpecInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=launch" })
  launch?: string;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: GoogleCloudOrgpolicyV2PolicySpecInput;
}


// GoogleCloudOrgpolicyV2AlternatePolicySpec
/** 
 * Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch.
**/
export class GoogleCloudOrgpolicyV2AlternatePolicySpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=launch" })
  launch?: string;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: GoogleCloudOrgpolicyV2PolicySpec;
}
