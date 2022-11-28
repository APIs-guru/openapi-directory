import { SpeakeasyBase } from "../../../internal/utils";
import { BackgroundSuggestionState } from "./backgroundsuggestionstate";
import { SizeSuggestionState } from "./sizesuggestionstate";
/**
 * A mask that indicates which of the fields on the base DocumentStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export declare class DocumentStyleSuggestionState extends SpeakeasyBase {
    backgroundSuggestionState?: BackgroundSuggestionState;
    defaultFooterIdSuggested?: boolean;
    defaultHeaderIdSuggested?: boolean;
    evenPageFooterIdSuggested?: boolean;
    evenPageHeaderIdSuggested?: boolean;
    firstPageFooterIdSuggested?: boolean;
    firstPageHeaderIdSuggested?: boolean;
    marginBottomSuggested?: boolean;
    marginFooterSuggested?: boolean;
    marginHeaderSuggested?: boolean;
    marginLeftSuggested?: boolean;
    marginRightSuggested?: boolean;
    marginTopSuggested?: boolean;
    pageNumberStartSuggested?: boolean;
    pageSizeSuggestionState?: SizeSuggestionState;
    useCustomHeaderFooterMarginsSuggested?: boolean;
    useEvenPageHeaderFooterSuggested?: boolean;
    useFirstPageHeaderFooterSuggested?: boolean;
}
