import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ItemAcl } from "./itemacl";
import { ItemContent } from "./itemcontent";
import { ItemMetadata } from "./itemmetadata";
import { ItemStatus } from "./itemstatus";
import { ItemStructuredData } from "./itemstructureddata";

export enum ItemItemTypeEnum {
    Unspecified = "UNSPECIFIED"
,    ContentItem = "CONTENT_ITEM"
,    ContainerItem = "CONTAINER_ITEM"
,    VirtualContainerItem = "VIRTUAL_CONTAINER_ITEM"
}


// Item
/** 
 * Represents a single object that is an item in the search index, such as a file, folder, or a database record.
**/
export class Item extends SpeakeasyBase {
  @Metadata({ data: "json, name=acl" })
  acl?: ItemAcl;

  @Metadata({ data: "json, name=content" })
  content?: ItemContent;

  @Metadata({ data: "json, name=itemType" })
  itemType?: ItemItemTypeEnum;

  @Metadata({ data: "json, name=metadata" })
  metadata?: ItemMetadata;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=payload" })
  payload?: string;

  @Metadata({ data: "json, name=queue" })
  queue?: string;

  @Metadata({ data: "json, name=status" })
  status?: ItemStatus;

  @Metadata({ data: "json, name=structuredData" })
  structuredData?: ItemStructuredData;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
