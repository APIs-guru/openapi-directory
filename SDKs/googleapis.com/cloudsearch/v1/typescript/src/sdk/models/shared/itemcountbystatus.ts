import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ItemCountByStatusStatusCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED"
,    Error = "ERROR"
,    Modified = "MODIFIED"
,    NewItem = "NEW_ITEM"
,    Accepted = "ACCEPTED"
}


export class ItemCountByStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=indexedItemsCount" })
  indexedItemsCount?: string;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: ItemCountByStatusStatusCodeEnum;
}
