import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BaseItemDto } from "./baseitemdto";



export class BaseItemDtoQueryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: BaseItemDto })
  items?: BaseItemDto[];

  @SpeakeasyMetadata({ data: "json, name=StartIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalRecordCount" })
  totalRecordCount?: number;
}
