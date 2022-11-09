import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudAssetV1p4beta1Edge } from "./googlecloudassetv1p4beta1edge";
import { GoogleCloudAssetV1p4beta1Identity } from "./googlecloudassetv1p4beta1identity";


export class GoogleCloudAssetV1p4beta1IdentityList extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupEdges", elemType: shared.GoogleCloudAssetV1p4beta1Edge })
  groupEdges?: GoogleCloudAssetV1p4beta1Edge[];

  @Metadata({ data: "json, name=identities", elemType: shared.GoogleCloudAssetV1p4beta1Identity })
  identities?: GoogleCloudAssetV1p4beta1Identity[];
}
