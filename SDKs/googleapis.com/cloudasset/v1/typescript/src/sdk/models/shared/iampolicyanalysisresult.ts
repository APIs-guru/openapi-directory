import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1AccessControlList } from "./googlecloudassetv1accesscontrollist";
import { Binding } from "./binding";
import { GoogleCloudAssetV1IdentityList } from "./googlecloudassetv1identitylist";



// IamPolicyAnalysisResult
/** 
 * IAM Policy analysis result, consisting of one IAM policy binding and derived access control lists.
**/
export class IamPolicyAnalysisResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessControlLists", elemType: GoogleCloudAssetV1AccessControlList })
  accessControlLists?: GoogleCloudAssetV1AccessControlList[];

  @SpeakeasyMetadata({ data: "json, name=attachedResourceFullName" })
  attachedResourceFullName?: string;

  @SpeakeasyMetadata({ data: "json, name=fullyExplored" })
  fullyExplored?: boolean;

  @SpeakeasyMetadata({ data: "json, name=iamBinding" })
  iamBinding?: Binding;

  @SpeakeasyMetadata({ data: "json, name=identityList" })
  identityList?: GoogleCloudAssetV1IdentityList;
}
