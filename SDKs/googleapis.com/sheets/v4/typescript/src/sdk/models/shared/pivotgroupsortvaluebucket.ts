import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExtendedValue } from "./extendedvalue";



// PivotGroupSortValueBucket
/** 
 * Information about which values in a pivot group should be used for sorting.
**/
export class PivotGroupSortValueBucket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buckets", elemType: ExtendedValue })
  buckets?: ExtendedValue[];

  @SpeakeasyMetadata({ data: "json, name=valuesIndex" })
  valuesIndex?: number;
}
