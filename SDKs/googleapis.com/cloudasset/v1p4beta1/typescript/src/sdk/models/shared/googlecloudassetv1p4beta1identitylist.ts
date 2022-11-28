import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1p4beta1Edge } from "./googlecloudassetv1p4beta1edge";
import { GoogleCloudAssetV1p4beta1Identity } from "./googlecloudassetv1p4beta1identity";



export class GoogleCloudAssetV1p4beta1IdentityList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupEdges", elemType: GoogleCloudAssetV1p4beta1Edge })
  groupEdges?: GoogleCloudAssetV1p4beta1Edge[];

  @SpeakeasyMetadata({ data: "json, name=identities", elemType: GoogleCloudAssetV1p4beta1Identity })
  identities?: GoogleCloudAssetV1p4beta1Identity[];
}
