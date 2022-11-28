import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PivotGroupLimit
/** 
 * The count limit on rows or columns in the pivot group.
**/
export class PivotGroupLimit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applyOrder" })
  applyOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=countLimit" })
  countLimit?: number;
}
