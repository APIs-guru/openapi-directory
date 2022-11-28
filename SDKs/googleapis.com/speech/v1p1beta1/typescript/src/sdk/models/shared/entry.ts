import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Entry
/** 
 * A single replacement configuration.
**/
export class Entry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=replace" })
  replace?: string;

  @SpeakeasyMetadata({ data: "json, name=search" })
  search?: string;
}
