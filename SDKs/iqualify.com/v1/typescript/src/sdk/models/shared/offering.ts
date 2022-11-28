import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BadgeExpiry } from "./badgeexpiry";



export class OfferingBadge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=badgeExpiry" })
  badgeExpiry?: BadgeExpiry;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=requiresApproval" })
  requiresApproval?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class OfferingMetadata1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}


export class Offering extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=badge" })
  badge?: OfferingBadge;

  @SpeakeasyMetadata({ data: "json, name=contentId" })
  contentId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=earlyCloseOffDate" })
  earlyCloseOffDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: Date;

  @SpeakeasyMetadata({ data: "json, name=hasEarlyCloseOff" })
  hasEarlyCloseOff?: boolean;

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier?: string;

  @SpeakeasyMetadata({ data: "json, name=isReadonly" })
  isReadonly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: OfferingMetadata1;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=overview" })
  overview?: string;

  @SpeakeasyMetadata({ data: "json, name=rootContentId" })
  rootContentId?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: Date;

  @SpeakeasyMetadata({ data: "json, name=trailerVideoUrl" })
  trailerVideoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=useRelativeDates" })
  useRelativeDates?: boolean;
}
