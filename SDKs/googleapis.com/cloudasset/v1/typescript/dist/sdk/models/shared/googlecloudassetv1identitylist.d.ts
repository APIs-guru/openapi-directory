import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1Edge } from "./googlecloudassetv1edge";
import { GoogleCloudAssetV1Identity } from "./googlecloudassetv1identity";
/**
 * The identities and group edges.
**/
export declare class GoogleCloudAssetV1IdentityList extends SpeakeasyBase {
    groupEdges?: GoogleCloudAssetV1Edge[];
    identities?: GoogleCloudAssetV1Identity[];
}
