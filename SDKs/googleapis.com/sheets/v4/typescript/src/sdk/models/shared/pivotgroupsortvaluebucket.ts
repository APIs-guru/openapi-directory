import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExtendedValue } from "./extendedvalue";


// PivotGroupSortValueBucket
/** 
 * Information about which values in a pivot group should be used for sorting.
**/
export class PivotGroupSortValueBucket extends SpeakeasyBase {
  @Metadata({ data: "json, name=buckets", elemType: shared.ExtendedValue })
  buckets?: ExtendedValue[];

  @Metadata({ data: "json, name=valuesIndex" })
  valuesIndex?: number;
}
