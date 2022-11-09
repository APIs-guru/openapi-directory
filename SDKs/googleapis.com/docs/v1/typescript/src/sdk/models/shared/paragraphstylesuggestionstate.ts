import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ShadingSuggestionState } from "./shadingsuggestionstate";


// ParagraphStyleSuggestionState
/** 
 * A mask that indicates which of the fields on the base ParagraphStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class ParagraphStyleSuggestionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=alignmentSuggested" })
  alignmentSuggested?: boolean;

  @Metadata({ data: "json, name=avoidWidowAndOrphanSuggested" })
  avoidWidowAndOrphanSuggested?: boolean;

  @Metadata({ data: "json, name=borderBetweenSuggested" })
  borderBetweenSuggested?: boolean;

  @Metadata({ data: "json, name=borderBottomSuggested" })
  borderBottomSuggested?: boolean;

  @Metadata({ data: "json, name=borderLeftSuggested" })
  borderLeftSuggested?: boolean;

  @Metadata({ data: "json, name=borderRightSuggested" })
  borderRightSuggested?: boolean;

  @Metadata({ data: "json, name=borderTopSuggested" })
  borderTopSuggested?: boolean;

  @Metadata({ data: "json, name=directionSuggested" })
  directionSuggested?: boolean;

  @Metadata({ data: "json, name=headingIdSuggested" })
  headingIdSuggested?: boolean;

  @Metadata({ data: "json, name=indentEndSuggested" })
  indentEndSuggested?: boolean;

  @Metadata({ data: "json, name=indentFirstLineSuggested" })
  indentFirstLineSuggested?: boolean;

  @Metadata({ data: "json, name=indentStartSuggested" })
  indentStartSuggested?: boolean;

  @Metadata({ data: "json, name=keepLinesTogetherSuggested" })
  keepLinesTogetherSuggested?: boolean;

  @Metadata({ data: "json, name=keepWithNextSuggested" })
  keepWithNextSuggested?: boolean;

  @Metadata({ data: "json, name=lineSpacingSuggested" })
  lineSpacingSuggested?: boolean;

  @Metadata({ data: "json, name=namedStyleTypeSuggested" })
  namedStyleTypeSuggested?: boolean;

  @Metadata({ data: "json, name=pageBreakBeforeSuggested" })
  pageBreakBeforeSuggested?: boolean;

  @Metadata({ data: "json, name=shadingSuggestionState" })
  shadingSuggestionState?: ShadingSuggestionState;

  @Metadata({ data: "json, name=spaceAboveSuggested" })
  spaceAboveSuggested?: boolean;

  @Metadata({ data: "json, name=spaceBelowSuggested" })
  spaceBelowSuggested?: boolean;

  @Metadata({ data: "json, name=spacingModeSuggested" })
  spacingModeSuggested?: boolean;
}
