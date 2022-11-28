import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum {
    HorizontalAlignmentUnspecified = "HORIZONTAL_ALIGNMENT_UNSPECIFIED",
    Leading = "LEADING",
    Center = "CENTER",
    Trailing = "TRAILING"
}
/**
 * Column properties for TableCard.
**/
export declare class GoogleCloudDialogflowV2IntentMessageColumnProperties extends SpeakeasyBase {
    header?: string;
    horizontalAlignment?: GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum;
}
