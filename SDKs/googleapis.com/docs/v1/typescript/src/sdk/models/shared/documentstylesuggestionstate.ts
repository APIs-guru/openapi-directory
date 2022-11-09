import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BackgroundSuggestionState } from "./backgroundsuggestionstate";
import { SizeSuggestionState } from "./sizesuggestionstate";


// DocumentStyleSuggestionState
/** 
 * A mask that indicates which of the fields on the base DocumentStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class DocumentStyleSuggestionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=backgroundSuggestionState" })
  backgroundSuggestionState?: BackgroundSuggestionState;

  @Metadata({ data: "json, name=defaultFooterIdSuggested" })
  defaultFooterIdSuggested?: boolean;

  @Metadata({ data: "json, name=defaultHeaderIdSuggested" })
  defaultHeaderIdSuggested?: boolean;

  @Metadata({ data: "json, name=evenPageFooterIdSuggested" })
  evenPageFooterIdSuggested?: boolean;

  @Metadata({ data: "json, name=evenPageHeaderIdSuggested" })
  evenPageHeaderIdSuggested?: boolean;

  @Metadata({ data: "json, name=firstPageFooterIdSuggested" })
  firstPageFooterIdSuggested?: boolean;

  @Metadata({ data: "json, name=firstPageHeaderIdSuggested" })
  firstPageHeaderIdSuggested?: boolean;

  @Metadata({ data: "json, name=marginBottomSuggested" })
  marginBottomSuggested?: boolean;

  @Metadata({ data: "json, name=marginFooterSuggested" })
  marginFooterSuggested?: boolean;

  @Metadata({ data: "json, name=marginHeaderSuggested" })
  marginHeaderSuggested?: boolean;

  @Metadata({ data: "json, name=marginLeftSuggested" })
  marginLeftSuggested?: boolean;

  @Metadata({ data: "json, name=marginRightSuggested" })
  marginRightSuggested?: boolean;

  @Metadata({ data: "json, name=marginTopSuggested" })
  marginTopSuggested?: boolean;

  @Metadata({ data: "json, name=pageNumberStartSuggested" })
  pageNumberStartSuggested?: boolean;

  @Metadata({ data: "json, name=pageSizeSuggestionState" })
  pageSizeSuggestionState?: SizeSuggestionState;

  @Metadata({ data: "json, name=useCustomHeaderFooterMarginsSuggested" })
  useCustomHeaderFooterMarginsSuggested?: boolean;

  @Metadata({ data: "json, name=useEvenPageHeaderFooterSuggested" })
  useEvenPageHeaderFooterSuggested?: boolean;

  @Metadata({ data: "json, name=useFirstPageHeaderFooterSuggested" })
  useFirstPageHeaderFooterSuggested?: boolean;
}
