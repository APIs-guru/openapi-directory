import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Replaces the contents of the specified NamedRange or NamedRanges with the given replacement content. Note that an individual NamedRange may consist of multiple discontinuous ranges. In this case, only the content in the first range will be replaced. The other ranges and their content will be deleted. In cases where replacing or deleting any ranges would result in an invalid document structure, a 400 bad request error is returned.
**/
export declare class ReplaceNamedRangeContentRequest extends SpeakeasyBase {
    namedRangeId?: string;
    namedRangeName?: string;
    text?: string;
}
