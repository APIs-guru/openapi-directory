import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackgroundSuggestionState } from "./backgroundsuggestionstate";
import { SizeSuggestionState } from "./sizesuggestionstate";



// DocumentStyleSuggestionState
/** 
 * A mask that indicates which of the fields on the base DocumentStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class DocumentStyleSuggestionState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundSuggestionState" })
  backgroundSuggestionState?: BackgroundSuggestionState;

  @SpeakeasyMetadata({ data: "json, name=defaultFooterIdSuggested" })
  defaultFooterIdSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=defaultHeaderIdSuggested" })
  defaultHeaderIdSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=evenPageFooterIdSuggested" })
  evenPageFooterIdSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=evenPageHeaderIdSuggested" })
  evenPageHeaderIdSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=firstPageFooterIdSuggested" })
  firstPageFooterIdSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=firstPageHeaderIdSuggested" })
  firstPageHeaderIdSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=marginBottomSuggested" })
  marginBottomSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=marginFooterSuggested" })
  marginFooterSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=marginHeaderSuggested" })
  marginHeaderSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=marginLeftSuggested" })
  marginLeftSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=marginRightSuggested" })
  marginRightSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=marginTopSuggested" })
  marginTopSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pageNumberStartSuggested" })
  pageNumberStartSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pageSizeSuggestionState" })
  pageSizeSuggestionState?: SizeSuggestionState;

  @SpeakeasyMetadata({ data: "json, name=useCustomHeaderFooterMarginsSuggested" })
  useCustomHeaderFooterMarginsSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=useEvenPageHeaderFooterSuggested" })
  useEvenPageHeaderFooterSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=useFirstPageHeaderFooterSuggested" })
  useFirstPageHeaderFooterSuggested?: boolean;
}
