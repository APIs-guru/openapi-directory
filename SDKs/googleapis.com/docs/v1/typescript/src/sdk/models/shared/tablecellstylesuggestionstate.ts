import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TableCellStyleSuggestionState
/** 
 * A mask that indicates which of the fields on the base TableCellStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class TableCellStyleSuggestionState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundColorSuggested" })
  backgroundColorSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=borderBottomSuggested" })
  borderBottomSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=borderLeftSuggested" })
  borderLeftSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=borderRightSuggested" })
  borderRightSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=borderTopSuggested" })
  borderTopSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=columnSpanSuggested" })
  columnSpanSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=contentAlignmentSuggested" })
  contentAlignmentSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=paddingBottomSuggested" })
  paddingBottomSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=paddingLeftSuggested" })
  paddingLeftSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=paddingRightSuggested" })
  paddingRightSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=paddingTopSuggested" })
  paddingTopSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rowSpanSuggested" })
  rowSpanSuggested?: boolean;
}
