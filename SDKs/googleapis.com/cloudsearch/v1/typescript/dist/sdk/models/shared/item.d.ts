import { SpeakeasyBase } from "../../../internal/utils";
import { ItemAcl } from "./itemacl";
import { ItemContent } from "./itemcontent";
import { ItemMetadata } from "./itemmetadata";
import { ItemStatus } from "./itemstatus";
import { ItemStructuredData } from "./itemstructureddata";
export declare enum ItemItemTypeEnum {
    Unspecified = "UNSPECIFIED",
    ContentItem = "CONTENT_ITEM",
    ContainerItem = "CONTAINER_ITEM",
    VirtualContainerItem = "VIRTUAL_CONTAINER_ITEM"
}
/**
 * Represents a single object that is an item in the search index, such as a file, folder, or a database record.
**/
export declare class Item extends SpeakeasyBase {
    acl?: ItemAcl;
    content?: ItemContent;
    itemType?: ItemItemTypeEnum;
    metadata?: ItemMetadata;
    name?: string;
    payload?: string;
    queue?: string;
    status?: ItemStatus;
    structuredData?: ItemStructuredData;
    version?: string;
}
