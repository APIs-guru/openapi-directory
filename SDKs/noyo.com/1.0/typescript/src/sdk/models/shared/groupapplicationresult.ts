import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GroupApplicationResultApplicationTypeEnum {
    New = "new",
    Renewal = "renewal",
    Upsell = "upsell"
}

export enum GroupApplicationResultStatusEnum {
    ActionRequired = "action_required",
    Canceled = "canceled",
    InProgress = "in_progress",
    InstalledAtCarrier = "installed_at_carrier",
    NoyoReview = "noyo_review",
    ReadyForRequests = "ready_for_requests",
    UnableToInstall = "unable_to_install",
    WaitingOnCarrier = "waiting_on_carrier"
}


export class GroupApplicationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application_type" })
  applicationType: GroupApplicationResultApplicationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=carrier_group_id" })
  carrierGroupId: string;

  @SpeakeasyMetadata({ data: "json, name=carrier_id" })
  carrierId: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: number;

  @SpeakeasyMetadata({ data: "json, name=group_id" })
  groupId: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified: number;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GroupApplicationResultStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=status_notes" })
  statusNotes: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
