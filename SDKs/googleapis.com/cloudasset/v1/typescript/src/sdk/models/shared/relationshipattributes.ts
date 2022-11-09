import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RelationshipAttributes
/** 
 * DEPRECATED. This message only presents for the purpose of backward-compatibility. The server will never populate this message in responses. The relationship attributes which include `type`, `source_resource_type`, `target_resource_type` and `action`.
**/
export class RelationshipAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=sourceResourceType" })
  sourceResourceType?: string;

  @Metadata({ data: "json, name=targetResourceType" })
  targetResourceType?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
