import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnum {
    HorizontalAlignmentUnspecified = "HORIZONTAL_ALIGNMENT_UNSPECIFIED",
    Leading = "LEADING",
    Center = "CENTER",
    Trailing = "TRAILING"
}


// GoogleCloudDialogflowV2beta1IntentMessageColumnProperties
/** 
 * Column properties for TableCard.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageColumnProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: string;

  @SpeakeasyMetadata({ data: "json, name=horizontalAlignment" })
  horizontalAlignment?: GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnum;
}
