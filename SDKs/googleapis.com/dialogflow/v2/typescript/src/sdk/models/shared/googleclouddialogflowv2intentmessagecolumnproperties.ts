import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum {
    HorizontalAlignmentUnspecified = "HORIZONTAL_ALIGNMENT_UNSPECIFIED"
,    Leading = "LEADING"
,    Center = "CENTER"
,    Trailing = "TRAILING"
}


// GoogleCloudDialogflowV2IntentMessageColumnProperties
/** 
 * Column properties for TableCard.
**/
export class GoogleCloudDialogflowV2IntentMessageColumnProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=header" })
  header?: string;

  @Metadata({ data: "json, name=horizontalAlignment" })
  horizontalAlignment?: GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum;
}
