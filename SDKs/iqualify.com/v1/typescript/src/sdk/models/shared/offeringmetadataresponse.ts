import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OfferingMetadata } from "./offeringmetadata";


export class OfferingMetadataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentId" })
  contentId?: string;

  @Metadata({ data: "json, name=coverImageUrl" })
  coverImageUrl?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=earlyCloseOffDate" })
  earlyCloseOffDate?: Date;

  @Metadata({ data: "json, name=end" })
  end?: Date;

  @Metadata({ data: "json, name=enrollmentLimit" })
  enrollmentLimit?: number;

  @Metadata({ data: "json, name=hasEarlyCloseOff" })
  hasEarlyCloseOff?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=identifier" })
  identifier?: string;

  @Metadata({ data: "json, name=isReadonly" })
  isReadonly?: boolean;

  @Metadata({ data: "json, name=metadata" })
  metadata?: OfferingMetadata;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=overview" })
  overview?: string;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=start" })
  start?: Date;

  @Metadata({ data: "json, name=tasksEnabled" })
  tasksEnabled?: boolean;

  @Metadata({ data: "json, name=trailerVideoUrl" })
  trailerVideoUrl?: string;

  @Metadata({ data: "json, name=useRelativeDates" })
  useRelativeDates?: boolean;
}
