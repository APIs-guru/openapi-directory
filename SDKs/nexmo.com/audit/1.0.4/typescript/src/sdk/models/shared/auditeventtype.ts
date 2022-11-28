import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventTypesEnum } from "./eventtypesenum";



export class AuditEventType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: EventTypesEnum;
}
