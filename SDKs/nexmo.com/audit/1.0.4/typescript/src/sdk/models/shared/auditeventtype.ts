import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventTypesEnum } from "./eventtypesenum";


export class AuditEventType extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=type" })
  type?: EventTypesEnum;
}
