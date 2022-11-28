import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1AccessControlList } from "./googlecloudassetv1accesscontrollist";
import { Binding } from "./binding";
import { GoogleCloudAssetV1IdentityList } from "./googlecloudassetv1identitylist";
/**
 * IAM Policy analysis result, consisting of one IAM policy binding and derived access control lists.
**/
export declare class IamPolicyAnalysisResult extends SpeakeasyBase {
    accessControlLists?: GoogleCloudAssetV1AccessControlList[];
    attachedResourceFullName?: string;
    fullyExplored?: boolean;
    iamBinding?: Binding;
    identityList?: GoogleCloudAssetV1IdentityList;
}
