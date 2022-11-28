import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuditEventType } from "./auditeventtype";



export class AuditEventTypesResp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventTypes", elemType: AuditEventType })
  eventTypes?: AuditEventType[];
}
