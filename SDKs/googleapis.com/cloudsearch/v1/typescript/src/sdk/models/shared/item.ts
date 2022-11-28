import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItemAcl } from "./itemacl";
import { ItemContent } from "./itemcontent";
import { ItemMetadata } from "./itemmetadata";
import { ItemStatus } from "./itemstatus";
import { ItemStructuredData } from "./itemstructureddata";


export enum ItemItemTypeEnum {
    Unspecified = "UNSPECIFIED",
    ContentItem = "CONTENT_ITEM",
    ContainerItem = "CONTAINER_ITEM",
    VirtualContainerItem = "VIRTUAL_CONTAINER_ITEM"
}


// Item
/** 
 * Represents a single object that is an item in the search index, such as a file, folder, or a database record.
**/
export class Item extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acl" })
  acl?: ItemAcl;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: ItemContent;

  @SpeakeasyMetadata({ data: "json, name=itemType" })
  itemType?: ItemItemTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ItemMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: string;

  @SpeakeasyMetadata({ data: "json, name=queue" })
  queue?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ItemStatus;

  @SpeakeasyMetadata({ data: "json, name=structuredData" })
  structuredData?: ItemStructuredData;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
