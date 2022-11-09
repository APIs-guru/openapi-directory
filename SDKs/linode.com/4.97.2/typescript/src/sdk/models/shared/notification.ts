import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NotificationEntity
/** 
 * Detailed information about the Notification.
**/
export class NotificationEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

export enum NotificationSeverityEnum {
    Minor = "minor"
,    Major = "major"
,    Critical = "critical"
}

export enum NotificationTypeEnum {
    MigrationScheduled = "migration_scheduled"
,    MigrationImminent = "migration_imminent"
,    MigrationPending = "migration_pending"
,    RebootScheduled = "reboot_scheduled"
,    Outage = "outage"
,    PaymentDue = "payment_due"
,    TicketImportant = "ticket_important"
,    TicketAbuse = "ticket_abuse"
,    Notice = "notice"
,    Maintenance = "maintenance"
,    Promotion = "promotion"
}


// Notification
/** 
 * An important, often time-sensitive item related to your Account.
 * 
**/
export class Notification extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=entity" })
  entity?: NotificationEntity;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: NotificationSeverityEnum;

  @Metadata({ data: "json, name=type" })
  type?: NotificationTypeEnum;

  @Metadata({ data: "json, name=until" })
  until?: Date;

  @Metadata({ data: "json, name=when" })
  when?: Date;
}
