import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BadgeExpiry } from "./badgeexpiry";
import { Criteria } from "./criteria";
import { OpenBadgeClass } from "./openbadgeclass";



export class Badge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=badgeExpiry" })
  badgeExpiry?: BadgeExpiry;

  @SpeakeasyMetadata({ data: "json, name=badgeUrl" })
  badgeUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=criterias" })
  criterias?: Criteria;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=openBadge" })
  openBadge?: OpenBadgeClass;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
