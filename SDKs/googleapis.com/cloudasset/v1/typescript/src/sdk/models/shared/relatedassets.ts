import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RelatedAsset } from "./relatedasset";
import { RelationshipAttributes } from "./relationshipattributes";


// RelatedAssets
/** 
 * DEPRECATED. This message only presents for the purpose of backward-compatibility. The server will never populate this message in responses. The detailed related assets with the `relationship_type`.
**/
export class RelatedAssets extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: shared.RelatedAsset })
  assets?: RelatedAsset[];

  @Metadata({ data: "json, name=relationshipAttributes" })
  relationshipAttributes?: RelationshipAttributes;
}
