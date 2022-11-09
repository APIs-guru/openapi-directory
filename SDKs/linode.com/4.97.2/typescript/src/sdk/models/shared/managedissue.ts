import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ManagedIssueEntityTypeEnum {
    Ticket = "ticket"
}


// ManagedIssueEntity
/** 
 * The ticket this Managed Issue opened.
 * 
**/
export class ManagedIssueEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=type" })
  type?: ManagedIssueEntityTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


// ManagedIssue
/** 
 * An Issue that was detected with a service Linode is managing.
 * 
**/
export class ManagedIssue extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=entity" })
  entity?: ManagedIssueEntity;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=services" })
  services?: number[];
}
