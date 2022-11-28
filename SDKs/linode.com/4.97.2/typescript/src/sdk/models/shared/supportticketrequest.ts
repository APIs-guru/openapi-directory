import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SupportTicketRequest
/** 
 * An object representing a created Support Ticket - a question or issue and request for help from the Linode support team.
 * Only one of the ID attributes (`linode_id`, `domain_id`, etc.) can be set on a single Support Ticket.
 * 
**/
export class SupportTicketRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=domain_id" })
  domainId?: number;

  @SpeakeasyMetadata({ data: "json, name=linode_id" })
  linodeId?: number;

  @SpeakeasyMetadata({ data: "json, name=longviewclient_id" })
  longviewclientId?: number;

  @SpeakeasyMetadata({ data: "json, name=managed_issue" })
  managedIssue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nodebalancer_id" })
  nodebalancerId?: number;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary: string;

  @SpeakeasyMetadata({ data: "json, name=vlan" })
  vlan?: string;

  @SpeakeasyMetadata({ data: "json, name=volume_id" })
  volumeId?: number;
}
