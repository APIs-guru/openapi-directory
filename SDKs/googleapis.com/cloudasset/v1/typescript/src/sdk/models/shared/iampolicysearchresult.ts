import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Explanation } from "./explanation";
import { Policy } from "./policy";


// IamPolicySearchResult
/** 
 * A result of IAM Policy search, containing information of an IAM policy.
**/
export class IamPolicySearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetType" })
  assetType?: string;

  @Metadata({ data: "json, name=explanation" })
  explanation?: Explanation;

  @Metadata({ data: "json, name=folders" })
  folders?: string[];

  @Metadata({ data: "json, name=organization" })
  organization?: string;

  @Metadata({ data: "json, name=policy" })
  policy?: Policy;

  @Metadata({ data: "json, name=project" })
  project?: string;

  @Metadata({ data: "json, name=resource" })
  resource?: string;
}
