import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1AnnotatedMessagePart
/** 
 * Represents a part of a message possibly annotated with an entity. The part can be an entity or purely a part of the message between two entities or message start/end.
**/
export class GoogleCloudDialogflowV2beta1AnnotatedMessagePart extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityType" })
  entityType?: string;

  @SpeakeasyMetadata({ data: "json, name=formattedValue" })
  formattedValue?: any;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
