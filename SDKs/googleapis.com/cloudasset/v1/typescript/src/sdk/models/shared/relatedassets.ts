import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RelatedAsset } from "./relatedasset";
import { RelationshipAttributes } from "./relationshipattributes";



// RelatedAssets
/** 
 * DEPRECATED. This message only presents for the purpose of backward-compatibility. The server will never populate this message in responses. The detailed related assets with the `relationship_type`.
**/
export class RelatedAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: RelatedAsset })
  assets?: RelatedAsset[];

  @SpeakeasyMetadata({ data: "json, name=relationshipAttributes" })
  relationshipAttributes?: RelationshipAttributes;
}
