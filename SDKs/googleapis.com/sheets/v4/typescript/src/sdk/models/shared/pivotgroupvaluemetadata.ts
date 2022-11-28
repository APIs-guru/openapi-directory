import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExtendedValue } from "./extendedvalue";



// PivotGroupValueMetadata
/** 
 * Metadata about a value in a pivot grouping.
**/
export class PivotGroupValueMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collapsed" })
  collapsed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: ExtendedValue;
}
