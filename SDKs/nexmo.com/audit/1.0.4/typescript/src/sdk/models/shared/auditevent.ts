import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventLink } from "./eventlink";
import { EventTypesEnum } from "./eventtypesenum";

export enum AuditEventSourceEnum {
    Cd = "CD"
,    Devapi = "DEVAPI"
}

export enum AuditEventSourceDescriptionEnum {
    CustomerDashboard = "Customer Dashboard"
,    DeveloperApi = "Developer API"
}


export class AuditEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: EventLink;

  @Metadata({ data: "json, name=account_id" })
  accountId?: string;

  @Metadata({ data: "json, name=context" })
  context?: Map<string, any>;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=event_type" })
  eventType?: EventTypesEnum;

  @Metadata({ data: "json, name=event_type_description" })
  eventTypeDescription?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=source" })
  source?: AuditEventSourceEnum;

  @Metadata({ data: "json, name=source_country" })
  sourceCountry?: string;

  @Metadata({ data: "json, name=source_description" })
  sourceDescription?: AuditEventSourceDescriptionEnum;

  @Metadata({ data: "json, name=source_ip" })
  sourceIp?: string;

  @Metadata({ data: "json, name=user_email" })
  userEmail?: string;

  @Metadata({ data: "json, name=user_id" })
  userId?: number;
}
