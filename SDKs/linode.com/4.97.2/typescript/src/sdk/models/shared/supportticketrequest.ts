import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SupportTicketRequest
/** 
 * An object representing a created Support Ticket - a question or issue and request for help from the Linode support team.
 * Only one of the ID attributes (`linode_id`, `domain_id`, etc.) can be set on a single Support Ticket.
 * 
**/
export class SupportTicketRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=domain_id" })
  domainId?: number;

  @Metadata({ data: "json, name=linode_id" })
  linodeId?: number;

  @Metadata({ data: "json, name=longviewclient_id" })
  longviewclientId?: number;

  @Metadata({ data: "json, name=managed_issue" })
  managedIssue?: boolean;

  @Metadata({ data: "json, name=nodebalancer_id" })
  nodebalancerId?: number;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=summary" })
  summary: string;

  @Metadata({ data: "json, name=vlan" })
  vlan?: string;

  @Metadata({ data: "json, name=volume_id" })
  volumeId?: number;
}
