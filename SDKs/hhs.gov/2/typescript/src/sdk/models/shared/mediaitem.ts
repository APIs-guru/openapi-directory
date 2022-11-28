import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Campaign } from "./campaign";
import { ExtendedAttribute } from "./extendedattribute";
import { Language } from "./language";
import { Source } from "./source";



export class MediaItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=campaigns", elemType: Campaign })
  campaigns?: Campaign[];

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=customAttributionUrl" })
  customAttributionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=customPreviewUrl" })
  customPreviewUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=customThumbnailUrl" })
  customThumbnailUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=dateContentAuthored" })
  dateContentAuthored?: Date;

  @SpeakeasyMetadata({ data: "json, name=dateContentPublished" })
  dateContentPublished?: Date;

  @SpeakeasyMetadata({ data: "json, name=dateContentReviewed" })
  dateContentReviewed?: Date;

  @SpeakeasyMetadata({ data: "json, name=dateContentUpdated" })
  dateContentUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=dateSyndicationCaptured" })
  dateSyndicationCaptured?: Date;

  @SpeakeasyMetadata({ data: "json, name=dateSyndicationUpdated" })
  dateSyndicationUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=dateSyndicationVisible" })
  dateSyndicationVisible?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=extendedAttributes", elemType: ExtendedAttribute })
  extendedAttributes?: ExtendedAttribute[];

  @SpeakeasyMetadata({ data: "json, name=externalGuid" })
  externalGuid?: string;

  @SpeakeasyMetadata({ data: "json, name=foreignSyndicationAPIUrl" })
  foreignSyndicationApiUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=hash" })
  hash?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: Language;

  @SpeakeasyMetadata({ data: "json, name=mediaType" })
  mediaType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Source;

  @SpeakeasyMetadata({ data: "json, name=sourceUrl" })
  sourceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=targetUrl" })
  targetUrl?: string;
}
