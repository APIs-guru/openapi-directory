import { SpeakeasyBase } from "../../../internal/utils";
import { RelatedAsset } from "./relatedasset";
import { RelationshipAttributes } from "./relationshipattributes";
/**
 * DEPRECATED. This message only presents for the purpose of backward-compatibility. The server will never populate this message in responses. The detailed related assets with the `relationship_type`.
**/
export declare class RelatedAssets extends SpeakeasyBase {
    assets?: RelatedAsset[];
    relationshipAttributes?: RelationshipAttributes;
}
