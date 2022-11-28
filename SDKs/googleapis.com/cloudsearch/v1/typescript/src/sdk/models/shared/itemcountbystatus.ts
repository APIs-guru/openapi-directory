import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ItemCountByStatusStatusCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Error = "ERROR",
    Modified = "MODIFIED",
    NewItem = "NEW_ITEM",
    Accepted = "ACCEPTED"
}


export class ItemCountByStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=indexedItemsCount" })
  indexedItemsCount?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: ItemCountByStatusStatusCodeEnum;
}
