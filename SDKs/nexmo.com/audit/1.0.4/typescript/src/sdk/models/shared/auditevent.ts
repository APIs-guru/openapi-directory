import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventLink } from "./eventlink";
import { EventTypesEnum } from "./eventtypesenum";


export enum AuditEventSourceEnum {
    Cd = "CD",
    Devapi = "DEVAPI"
}

export enum AuditEventSourceDescriptionEnum {
    CustomerDashboard = "Customer Dashboard",
    DeveloperApi = "Developer API"
}


export class AuditEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: EventLink;

  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=event_type" })
  eventType?: EventTypesEnum;

  @SpeakeasyMetadata({ data: "json, name=event_type_description" })
  eventTypeDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: AuditEventSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=source_country" })
  sourceCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=source_description" })
  sourceDescription?: AuditEventSourceDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=source_ip" })
  sourceIp?: string;

  @SpeakeasyMetadata({ data: "json, name=user_email" })
  userEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: number;
}
