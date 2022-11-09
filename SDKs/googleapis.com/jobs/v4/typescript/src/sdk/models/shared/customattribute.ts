import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomAttribute
/** 
 * Custom attribute values that are either filterable or non-filterable.
**/
export class CustomAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=filterable" })
  filterable?: boolean;

  @Metadata({ data: "json, name=keywordSearchable" })
  keywordSearchable?: boolean;

  @Metadata({ data: "json, name=longValues" })
  longValues?: string[];

  @Metadata({ data: "json, name=stringValues" })
  stringValues?: string[];
}
