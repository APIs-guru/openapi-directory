import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PivotGroupLimit
/** 
 * The count limit on rows or columns in the pivot group.
**/
export class PivotGroupLimit extends SpeakeasyBase {
  @Metadata({ data: "json, name=applyOrder" })
  applyOrder?: number;

  @Metadata({ data: "json, name=countLimit" })
  countLimit?: number;
}
