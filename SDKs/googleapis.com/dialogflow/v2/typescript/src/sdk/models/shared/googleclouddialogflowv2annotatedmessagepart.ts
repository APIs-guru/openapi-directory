import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2AnnotatedMessagePart
/** 
 * Represents a part of a message possibly annotated with an entity. The part can be an entity or purely a part of the message between two entities or message start/end.
**/
export class GoogleCloudDialogflowV2AnnotatedMessagePart extends SpeakeasyBase {
  @Metadata({ data: "json, name=entityType" })
  entityType?: string;

  @Metadata({ data: "json, name=formattedValue" })
  formattedValue?: any;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
