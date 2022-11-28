import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A mask that indicates which of the fields on the base TableCellStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export declare class TableCellStyleSuggestionState extends SpeakeasyBase {
    backgroundColorSuggested?: boolean;
    borderBottomSuggested?: boolean;
    borderLeftSuggested?: boolean;
    borderRightSuggested?: boolean;
    borderTopSuggested?: boolean;
    columnSpanSuggested?: boolean;
    contentAlignmentSuggested?: boolean;
    paddingBottomSuggested?: boolean;
    paddingLeftSuggested?: boolean;
    paddingRightSuggested?: boolean;
    paddingTopSuggested?: boolean;
    rowSpanSuggested?: boolean;
}
