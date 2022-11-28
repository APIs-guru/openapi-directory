import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NotificationEntity
/** 
 * Detailed information about the Notification.
**/
export class NotificationEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

export enum NotificationSeverityEnum {
    Minor = "minor",
    Major = "major",
    Critical = "critical"
}

export enum NotificationTypeEnum {
    MigrationScheduled = "migration_scheduled",
    MigrationImminent = "migration_imminent",
    MigrationPending = "migration_pending",
    RebootScheduled = "reboot_scheduled",
    Outage = "outage",
    PaymentDue = "payment_due",
    TicketImportant = "ticket_important",
    TicketAbuse = "ticket_abuse",
    Notice = "notice",
    Maintenance = "maintenance",
    Promotion = "promotion"
}


// Notification
/** 
 * An important, often time-sensitive item related to your Account.
 * 
**/
export class Notification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=entity" })
  entity?: NotificationEntity;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: NotificationSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: NotificationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=until" })
  until?: Date;

  @SpeakeasyMetadata({ data: "json, name=when" })
  when?: Date;
}
