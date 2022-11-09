import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseCrmEventbusProtoBuganizerNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=assigneeEmailAddress" })
  assigneeEmailAddress?: string;

  @Metadata({ data: "json, name=componentId" })
  componentId?: string;

  @Metadata({ data: "json, name=templateId" })
  templateId?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
