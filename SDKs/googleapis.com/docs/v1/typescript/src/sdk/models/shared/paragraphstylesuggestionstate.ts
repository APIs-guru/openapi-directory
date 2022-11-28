import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShadingSuggestionState } from "./shadingsuggestionstate";



// ParagraphStyleSuggestionState
/** 
 * A mask that indicates which of the fields on the base ParagraphStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class ParagraphStyleSuggestionState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alignmentSuggested" })
  alignmentSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=avoidWidowAndOrphanSuggested" })
  avoidWidowAndOrphanSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=borderBetweenSuggested" })
  borderBetweenSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=borderBottomSuggested" })
  borderBottomSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=borderLeftSuggested" })
  borderLeftSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=borderRightSuggested" })
  borderRightSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=borderTopSuggested" })
  borderTopSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=directionSuggested" })
  directionSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=headingIdSuggested" })
  headingIdSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=indentEndSuggested" })
  indentEndSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=indentFirstLineSuggested" })
  indentFirstLineSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=indentStartSuggested" })
  indentStartSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=keepLinesTogetherSuggested" })
  keepLinesTogetherSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=keepWithNextSuggested" })
  keepWithNextSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lineSpacingSuggested" })
  lineSpacingSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=namedStyleTypeSuggested" })
  namedStyleTypeSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pageBreakBeforeSuggested" })
  pageBreakBeforeSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=shadingSuggestionState" })
  shadingSuggestionState?: ShadingSuggestionState;

  @SpeakeasyMetadata({ data: "json, name=spaceAboveSuggested" })
  spaceAboveSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=spaceBelowSuggested" })
  spaceBelowSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=spacingModeSuggested" })
  spacingModeSuggested?: boolean;
}
