import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Detailed information about the Notification.
**/
export declare class NotificationEntity extends SpeakeasyBase {
    id?: number;
    label?: string;
    type?: string;
    url?: string;
}
export declare enum NotificationSeverityEnum {
    Minor = "minor",
    Major = "major",
    Critical = "critical"
}
export declare enum NotificationTypeEnum {
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
/**
 * An important, often time-sensitive item related to your Account.
 *
**/
export declare class Notification extends SpeakeasyBase {
    body?: string;
    entity?: NotificationEntity;
    label?: string;
    message?: string;
    severity?: NotificationSeverityEnum;
    type?: NotificationTypeEnum;
    until?: Date;
    when?: Date;
}
