import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Criteria } from "./criteria";
import { OpenBadgeClass } from "./openbadgeclass";


export class UserBadgeBadgeExpiry extends SpeakeasyBase {
  @Metadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @Metadata({ data: "json, name=expires" })
  expires?: boolean;
}


export class UserBadge extends SpeakeasyBase {
  @Metadata({ data: "json, name=awardedAt" })
  awardedAt?: Date;

  @Metadata({ data: "json, name=badgeExpiry" })
  badgeExpiry?: UserBadgeBadgeExpiry;

  @Metadata({ data: "json, name=badgeUrl" })
  badgeUrl?: string;

  @Metadata({ data: "json, name=criterias" })
  criterias?: Criteria;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=offeringId" })
  offeringId?: string;

  @Metadata({ data: "json, name=openBadge" })
  openBadge?: OpenBadgeClass;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
