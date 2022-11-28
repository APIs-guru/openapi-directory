import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ManagedIssueEntityTypeEnum {
    Ticket = "ticket"
}
/**
 * The ticket this Managed Issue opened.
 *
**/
export declare class ManagedIssueEntity extends SpeakeasyBase {
    id?: number;
    label?: string;
    type?: ManagedIssueEntityTypeEnum;
    url?: string;
}
/**
 * An Issue that was detected with a service Linode is managing.
 *
**/
export declare class ManagedIssue extends SpeakeasyBase {
    created?: Date;
    entity?: ManagedIssueEntity;
    id?: number;
    services?: number[];
}
