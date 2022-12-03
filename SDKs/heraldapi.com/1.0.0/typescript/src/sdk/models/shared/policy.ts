import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PolicyStatusEnum {
    Pending = "pending",
    UnderReview = "under_review",
    Active = "active",
    Expired = "expired",
    Cancelled = "cancelled",
    Unresponsive = "unresponsive"
}


export class Policy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=portal_link" })
  portalLink?: string;

  @SpeakeasyMetadata({ data: "json, name=quote_id" })
  quoteId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PolicyStatusEnum;
}
