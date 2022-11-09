import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DivisionSearchResult
/** 
 * Represents a political geographic division that matches the requested query.
**/
export class DivisionSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=aliases" })
  aliases?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ocdId" })
  ocdId?: string;
}
