import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudOrgpolicyV2AlternatePolicySpec } from "./googlecloudorgpolicyv2alternatepolicyspec";
import { GoogleCloudOrgpolicyV2PolicySpec } from "./googlecloudorgpolicyv2policyspec";
import { GoogleCloudOrgpolicyV2AlternatePolicySpecInput } from "./googlecloudorgpolicyv2alternatepolicyspec";
import { GoogleCloudOrgpolicyV2PolicySpecInput } from "./googlecloudorgpolicyv2policyspec";



// GoogleCloudOrgpolicyV2Policy
/** 
 * Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
**/
export class GoogleCloudOrgpolicyV2Policy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternate" })
  alternate?: GoogleCloudOrgpolicyV2AlternatePolicySpec;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: GoogleCloudOrgpolicyV2PolicySpec;
}


// GoogleCloudOrgpolicyV2PolicyInput
/** 
 * Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
**/
export class GoogleCloudOrgpolicyV2PolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternate" })
  alternate?: GoogleCloudOrgpolicyV2AlternatePolicySpecInput;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: GoogleCloudOrgpolicyV2PolicySpecInput;
}
