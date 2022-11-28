import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";



// GoogleChromePolicyVersionsV1ResolveRequest
/** 
 * Request message for getting the resolved policy value for a specific target.
**/
export class GoogleChromePolicyVersionsV1ResolveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=policySchemaFilter" })
  policySchemaFilter?: string;

  @SpeakeasyMetadata({ data: "json, name=policyTargetKey" })
  policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
}
