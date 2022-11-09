import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BadgeExpiry } from "./badgeexpiry";
import { Criteria } from "./criteria";
import { OpenBadgeClass } from "./openbadgeclass";


export class Badge extends SpeakeasyBase {
  @Metadata({ data: "json, name=badgeExpiry" })
  badgeExpiry?: BadgeExpiry;

  @Metadata({ data: "json, name=badgeUrl" })
  badgeUrl?: string;

  @Metadata({ data: "json, name=criterias" })
  criterias?: Criteria;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=openBadge" })
  openBadge?: OpenBadgeClass;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
