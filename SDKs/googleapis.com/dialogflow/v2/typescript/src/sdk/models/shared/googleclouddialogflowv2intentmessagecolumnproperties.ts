import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum {
    HorizontalAlignmentUnspecified = "HORIZONTAL_ALIGNMENT_UNSPECIFIED",
    Leading = "LEADING",
    Center = "CENTER",
    Trailing = "TRAILING"
}


// GoogleCloudDialogflowV2IntentMessageColumnProperties
/** 
 * Column properties for TableCard.
**/
export class GoogleCloudDialogflowV2IntentMessageColumnProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: string;

  @SpeakeasyMetadata({ data: "json, name=horizontalAlignment" })
  horizontalAlignment?: GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum;
}
