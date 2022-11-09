import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NamedRange } from "./namedrange";


// NamedRanges
/** 
 * A collection of all the NamedRanges in the document that share a given name.
**/
export class NamedRanges extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=namedRanges", elemType: shared.NamedRange })
  namedRanges?: NamedRange[];
}
