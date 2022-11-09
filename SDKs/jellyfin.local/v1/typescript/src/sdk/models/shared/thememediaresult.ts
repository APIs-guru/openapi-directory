import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BaseItemDto } from "./baseitemdto";


// ThemeMediaResult
/** 
 * Class ThemeMediaResult.
**/
export class ThemeMediaResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.BaseItemDto })
  items?: BaseItemDto[];

  @Metadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @Metadata({ data: "json, name=StartIndex" })
  startIndex?: number;

  @Metadata({ data: "json, name=TotalRecordCount" })
  totalRecordCount?: number;
}
