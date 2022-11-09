import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TableCellStyleSuggestionState
/** 
 * A mask that indicates which of the fields on the base TableCellStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class TableCellStyleSuggestionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=backgroundColorSuggested" })
  backgroundColorSuggested?: boolean;

  @Metadata({ data: "json, name=borderBottomSuggested" })
  borderBottomSuggested?: boolean;

  @Metadata({ data: "json, name=borderLeftSuggested" })
  borderLeftSuggested?: boolean;

  @Metadata({ data: "json, name=borderRightSuggested" })
  borderRightSuggested?: boolean;

  @Metadata({ data: "json, name=borderTopSuggested" })
  borderTopSuggested?: boolean;

  @Metadata({ data: "json, name=columnSpanSuggested" })
  columnSpanSuggested?: boolean;

  @Metadata({ data: "json, name=contentAlignmentSuggested" })
  contentAlignmentSuggested?: boolean;

  @Metadata({ data: "json, name=paddingBottomSuggested" })
  paddingBottomSuggested?: boolean;

  @Metadata({ data: "json, name=paddingLeftSuggested" })
  paddingLeftSuggested?: boolean;

  @Metadata({ data: "json, name=paddingRightSuggested" })
  paddingRightSuggested?: boolean;

  @Metadata({ data: "json, name=paddingTopSuggested" })
  paddingTopSuggested?: boolean;

  @Metadata({ data: "json, name=rowSpanSuggested" })
  rowSpanSuggested?: boolean;
}
