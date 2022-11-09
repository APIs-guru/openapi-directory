import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExtendedValue } from "./extendedvalue";


// PivotGroupValueMetadata
/** 
 * Metadata about a value in a pivot grouping.
**/
export class PivotGroupValueMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=collapsed" })
  collapsed?: boolean;

  @Metadata({ data: "json, name=value" })
  value?: ExtendedValue;
}
