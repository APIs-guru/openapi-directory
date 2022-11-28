import { SpeakeasyBase } from "../../../internal/utils";
import { EventLink } from "./eventlink";
import { EventTypesEnum } from "./eventtypesenum";
export declare enum AuditEventSourceEnum {
    Cd = "CD",
    Devapi = "DEVAPI"
}
export declare enum AuditEventSourceDescriptionEnum {
    CustomerDashboard = "Customer Dashboard",
    DeveloperApi = "Developer API"
}
export declare class AuditEvent extends SpeakeasyBase {
    links?: EventLink;
    accountId?: string;
    context?: Map<string, any>;
    createdAt?: Date;
    eventType?: EventTypesEnum;
    eventTypeDescription?: string;
    id?: string;
    source?: AuditEventSourceEnum;
    sourceCountry?: string;
    sourceDescription?: AuditEventSourceDescriptionEnum;
    sourceIp?: string;
    userEmail?: string;
    userId?: number;
}
