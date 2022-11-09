import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudAssetV1Edge } from "./googlecloudassetv1edge";
import { GoogleCloudAssetV1Identity } from "./googlecloudassetv1identity";


// GoogleCloudAssetV1IdentityList
/** 
 * The identities and group edges.
**/
export class GoogleCloudAssetV1IdentityList extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupEdges", elemType: shared.GoogleCloudAssetV1Edge })
  groupEdges?: GoogleCloudAssetV1Edge[];

  @Metadata({ data: "json, name=identities", elemType: shared.GoogleCloudAssetV1Identity })
  identities?: GoogleCloudAssetV1Identity[];
}
