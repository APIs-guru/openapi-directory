import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BaseItemDto } from "./baseitemdto";



// ThemeMediaResult
/** 
 * Class ThemeMediaResult.
**/
export class ThemeMediaResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: BaseItemDto })
  items?: BaseItemDto[];

  @SpeakeasyMetadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=StartIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalRecordCount" })
  totalRecordCount?: number;
}
