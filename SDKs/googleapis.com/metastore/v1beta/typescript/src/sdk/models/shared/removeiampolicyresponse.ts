import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RemoveIamPolicyResponse
/** 
 * Response message for DataprocMetastore.RemoveIamPolicy.
**/
export class RemoveIamPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=success" })
  success?: boolean;
}
