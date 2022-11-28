import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomAttribute
/** 
 * Custom attribute values that are either filterable or non-filterable.
**/
export class CustomAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filterable" })
  filterable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=longValues" })
  longValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=stringValues" })
  stringValues?: string[];
}
