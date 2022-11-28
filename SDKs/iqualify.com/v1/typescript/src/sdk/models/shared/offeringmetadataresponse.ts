import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OfferingMetadata } from "./offeringmetadata";



export class OfferingMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentId" })
  contentId?: string;

  @SpeakeasyMetadata({ data: "json, name=coverImageUrl" })
  coverImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=earlyCloseOffDate" })
  earlyCloseOffDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: Date;

  @SpeakeasyMetadata({ data: "json, name=enrollmentLimit" })
  enrollmentLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=hasEarlyCloseOff" })
  hasEarlyCloseOff?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier?: string;

  @SpeakeasyMetadata({ data: "json, name=isReadonly" })
  isReadonly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: OfferingMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=overview" })
  overview?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: Date;

  @SpeakeasyMetadata({ data: "json, name=tasksEnabled" })
  tasksEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=trailerVideoUrl" })
  trailerVideoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=useRelativeDates" })
  useRelativeDates?: boolean;
}
