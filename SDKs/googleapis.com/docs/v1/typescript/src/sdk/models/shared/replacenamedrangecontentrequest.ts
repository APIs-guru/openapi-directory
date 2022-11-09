import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReplaceNamedRangeContentRequest
/** 
 * Replaces the contents of the specified NamedRange or NamedRanges with the given replacement content. Note that an individual NamedRange may consist of multiple discontinuous ranges. In this case, only the content in the first range will be replaced. The other ranges and their content will be deleted. In cases where replacing or deleting any ranges would result in an invalid document structure, a 400 bad request error is returned.
**/
export class ReplaceNamedRangeContentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=namedRangeId" })
  namedRangeId?: string;

  @Metadata({ data: "json, name=namedRangeName" })
  namedRangeName?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
