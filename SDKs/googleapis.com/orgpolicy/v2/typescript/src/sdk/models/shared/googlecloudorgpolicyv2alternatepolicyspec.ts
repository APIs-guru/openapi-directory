import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudOrgpolicyV2PolicySpec } from "./googlecloudorgpolicyv2policyspec";


// GoogleCloudOrgpolicyV2AlternatePolicySpec
/** 
 * Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch.
**/
export class GoogleCloudOrgpolicyV2AlternatePolicySpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=launch" })
  launch?: string;

  @Metadata({ data: "json, name=spec" })
  spec?: GoogleCloudOrgpolicyV2PolicySpec;
}
