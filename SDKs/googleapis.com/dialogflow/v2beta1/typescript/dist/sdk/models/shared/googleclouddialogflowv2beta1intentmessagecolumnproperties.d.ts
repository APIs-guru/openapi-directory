import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnum {
    HorizontalAlignmentUnspecified = "HORIZONTAL_ALIGNMENT_UNSPECIFIED",
    Leading = "LEADING",
    Center = "CENTER",
    Trailing = "TRAILING"
}
/**
 * Column properties for TableCard.
**/
export declare class GoogleCloudDialogflowV2beta1IntentMessageColumnProperties extends SpeakeasyBase {
    header?: string;
    horizontalAlignment?: GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnum;
}
