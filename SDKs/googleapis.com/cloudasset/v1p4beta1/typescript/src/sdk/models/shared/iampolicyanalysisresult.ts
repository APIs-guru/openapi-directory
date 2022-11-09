import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudAssetV1p4beta1AccessControlList } from "./googlecloudassetv1p4beta1accesscontrollist";
import { Binding } from "./binding";
import { GoogleCloudAssetV1p4beta1IdentityList } from "./googlecloudassetv1p4beta1identitylist";


// IamPolicyAnalysisResult
/** 
 * IAM Policy analysis result, consisting of one IAM policy binding and derived access control lists.
**/
export class IamPolicyAnalysisResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessControlLists", elemType: shared.GoogleCloudAssetV1p4beta1AccessControlList })
  accessControlLists?: GoogleCloudAssetV1p4beta1AccessControlList[];

  @Metadata({ data: "json, name=attachedResourceFullName" })
  attachedResourceFullName?: string;

  @Metadata({ data: "json, name=fullyExplored" })
  fullyExplored?: boolean;

  @Metadata({ data: "json, name=iamBinding" })
  iamBinding?: Binding;

  @Metadata({ data: "json, name=identityList" })
  identityList?: GoogleCloudAssetV1p4beta1IdentityList;
}
