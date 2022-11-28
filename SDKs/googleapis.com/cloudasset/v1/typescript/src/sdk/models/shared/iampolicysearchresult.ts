import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Explanation } from "./explanation";
import { Policy } from "./policy";



// IamPolicySearchResult
/** 
 * A result of IAM Policy search, containing information of an IAM policy.
**/
export class IamPolicySearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetType" })
  assetType?: string;

  @SpeakeasyMetadata({ data: "json, name=explanation" })
  explanation?: Explanation;

  @SpeakeasyMetadata({ data: "json, name=folders" })
  folders?: string[];

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: Policy;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;
}
