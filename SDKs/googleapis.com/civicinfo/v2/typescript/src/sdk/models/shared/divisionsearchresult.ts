import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DivisionSearchResult
/** 
 * Represents a political geographic division that matches the requested query.
**/
export class DivisionSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aliases" })
  aliases?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ocdId" })
  ocdId?: string;
}
