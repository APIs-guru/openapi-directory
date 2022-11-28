import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnterpriseCrmEventbusProtoBuganizerNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assigneeEmailAddress" })
  assigneeEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=componentId" })
  componentId?: string;

  @SpeakeasyMetadata({ data: "json, name=templateId" })
  templateId?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
