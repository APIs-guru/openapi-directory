import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1Edge } from "./googlecloudassetv1edge";
import { GoogleCloudAssetV1Identity } from "./googlecloudassetv1identity";



// GoogleCloudAssetV1IdentityList
/** 
 * The identities and group edges.
**/
export class GoogleCloudAssetV1IdentityList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupEdges", elemType: GoogleCloudAssetV1Edge })
  groupEdges?: GoogleCloudAssetV1Edge[];

  @SpeakeasyMetadata({ data: "json, name=identities", elemType: GoogleCloudAssetV1Identity })
  identities?: GoogleCloudAssetV1Identity[];
}
