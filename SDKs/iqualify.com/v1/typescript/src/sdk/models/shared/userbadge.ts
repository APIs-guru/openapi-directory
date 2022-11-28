import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Criteria } from "./criteria";
import { OpenBadgeClass } from "./openbadgeclass";



export class UserBadgeBadgeExpiry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=expires" })
  expires?: boolean;
}


export class UserBadge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awardedAt" })
  awardedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=badgeExpiry" })
  badgeExpiry?: UserBadgeBadgeExpiry;

  @SpeakeasyMetadata({ data: "json, name=badgeUrl" })
  badgeUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=criterias" })
  criterias?: Criteria;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=offeringId" })
  offeringId?: string;

  @SpeakeasyMetadata({ data: "json, name=openBadge" })
  openBadge?: OpenBadgeClass;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
