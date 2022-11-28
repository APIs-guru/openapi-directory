import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemoveIamPolicyResponse
/** 
 * Response message for DataprocMetastore.RemoveIamPolicy.
**/
export class RemoveIamPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
