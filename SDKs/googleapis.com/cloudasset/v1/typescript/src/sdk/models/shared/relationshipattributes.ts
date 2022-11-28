import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RelationshipAttributes
/** 
 * DEPRECATED. This message only presents for the purpose of backward-compatibility. The server will never populate this message in responses. The relationship attributes which include `type`, `source_resource_type`, `target_resource_type` and `action`.
**/
export class RelationshipAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceResourceType" })
  sourceResourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=targetResourceType" })
  targetResourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
