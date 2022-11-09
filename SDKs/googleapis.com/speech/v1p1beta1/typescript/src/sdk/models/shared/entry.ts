import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Entry
/** 
 * A single replacement configuration.
**/
export class Entry extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @Metadata({ data: "json, name=replace" })
  replace?: string;

  @Metadata({ data: "json, name=search" })
  search?: string;
}
