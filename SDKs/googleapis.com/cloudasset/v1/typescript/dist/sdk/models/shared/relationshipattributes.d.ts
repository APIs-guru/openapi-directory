import { SpeakeasyBase } from "../../../internal/utils";
/**
 * DEPRECATED. This message only presents for the purpose of backward-compatibility. The server will never populate this message in responses. The relationship attributes which include `type`, `source_resource_type`, `target_resource_type` and `action`.
**/
export declare class RelationshipAttributes extends SpeakeasyBase {
    action?: string;
    sourceResourceType?: string;
    targetResourceType?: string;
    type?: string;
}
