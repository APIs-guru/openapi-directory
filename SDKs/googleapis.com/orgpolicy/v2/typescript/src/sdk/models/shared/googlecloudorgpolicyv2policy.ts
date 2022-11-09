import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudOrgpolicyV2AlternatePolicySpec } from "./googlecloudorgpolicyv2alternatepolicyspec";
import { GoogleCloudOrgpolicyV2PolicySpec } from "./googlecloudorgpolicyv2policyspec";


// GoogleCloudOrgpolicyV2Policy
/** 
 * Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
**/
export class GoogleCloudOrgpolicyV2Policy extends SpeakeasyBase {
  @Metadata({ data: "json, name=alternate" })
  alternate?: GoogleCloudOrgpolicyV2AlternatePolicySpec;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=spec" })
  spec?: GoogleCloudOrgpolicyV2PolicySpec;
}
