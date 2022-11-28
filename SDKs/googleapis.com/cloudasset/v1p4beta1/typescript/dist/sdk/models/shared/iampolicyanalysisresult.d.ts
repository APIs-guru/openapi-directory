import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1p4beta1AccessControlList } from "./googlecloudassetv1p4beta1accesscontrollist";
import { Binding } from "./binding";
import { GoogleCloudAssetV1p4beta1IdentityList } from "./googlecloudassetv1p4beta1identitylist";
/**
 * IAM Policy analysis result, consisting of one IAM policy binding and derived access control lists.
**/
export declare class IamPolicyAnalysisResult extends SpeakeasyBase {
    accessControlLists?: GoogleCloudAssetV1p4beta1AccessControlList[];
    attachedResourceFullName?: string;
    fullyExplored?: boolean;
    iamBinding?: Binding;
    identityList?: GoogleCloudAssetV1p4beta1IdentityList;
}
