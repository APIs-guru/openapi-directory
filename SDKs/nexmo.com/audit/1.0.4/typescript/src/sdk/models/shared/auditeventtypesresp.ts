import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuditEventType } from "./auditeventtype";


export class AuditEventTypesResp extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventTypes", elemType: shared.AuditEventType })
  eventTypes?: AuditEventType[];
}
