import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ManagedIssueEntityTypeEnum {
    Ticket = "ticket"
}


// ManagedIssueEntity
/** 
 * The ticket this Managed Issue opened.
 * 
**/
export class ManagedIssueEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ManagedIssueEntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// ManagedIssue
/** 
 * An Issue that was detected with a service Linode is managing.
 * 
**/
export class ManagedIssue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=entity" })
  entity?: ManagedIssueEntity;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=services" })
  services?: number[];
}
