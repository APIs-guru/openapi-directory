import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BadgeExpiry } from "./badgeexpiry";


export class OfferingBadge extends SpeakeasyBase {
  @Metadata({ data: "json, name=badgeExpiry" })
  badgeExpiry?: BadgeExpiry;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=requiresApproval" })
  requiresApproval?: boolean;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class OfferingMetadata1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=level" })
  level?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=topic" })
  topic?: string;
}


export class Offering extends SpeakeasyBase {
  @Metadata({ data: "json, name=badge" })
  badge?: OfferingBadge;

  @Metadata({ data: "json, name=contentId" })
  contentId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=earlyCloseOffDate" })
  earlyCloseOffDate?: Date;

  @Metadata({ data: "json, name=end" })
  end?: Date;

  @Metadata({ data: "json, name=hasEarlyCloseOff" })
  hasEarlyCloseOff?: boolean;

  @Metadata({ data: "json, name=identifier" })
  identifier?: string;

  @Metadata({ data: "json, name=isReadonly" })
  isReadonly?: boolean;

  @Metadata({ data: "json, name=metadata" })
  metadata?: OfferingMetadata1;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=overview" })
  overview?: string;

  @Metadata({ data: "json, name=rootContentId" })
  rootContentId?: string;

  @Metadata({ data: "json, name=start" })
  start?: Date;

  @Metadata({ data: "json, name=trailerVideoUrl" })
  trailerVideoUrl?: string;

  @Metadata({ data: "json, name=useRelativeDates" })
  useRelativeDates?: boolean;
}
