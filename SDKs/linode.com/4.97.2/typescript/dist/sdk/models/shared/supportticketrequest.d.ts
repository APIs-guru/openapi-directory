import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object representing a created Support Ticket - a question or issue and request for help from the Linode support team.
 * Only one of the ID attributes (`linode_id`, `domain_id`, etc.) can be set on a single Support Ticket.
 *
**/
export declare class SupportTicketRequest extends SpeakeasyBase {
    description: string;
    domainId?: number;
    linodeId?: number;
    longviewclientId?: number;
    managedIssue?: boolean;
    nodebalancerId?: number;
    region?: string;
    summary: string;
    vlan?: string;
    volumeId?: number;
}
