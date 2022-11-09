import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Campaign } from "./campaign";
import { ExtendedAttribute } from "./extendedattribute";
import { Language } from "./language";
import { Source } from "./source";


export class MediaItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=campaigns", elemType: shared.Campaign })
  campaigns?: Campaign[];

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=customAttributionUrl" })
  customAttributionUrl?: string;

  @Metadata({ data: "json, name=customPreviewUrl" })
  customPreviewUrl?: string;

  @Metadata({ data: "json, name=customThumbnailUrl" })
  customThumbnailUrl?: string;

  @Metadata({ data: "json, name=dateContentAuthored" })
  dateContentAuthored?: Date;

  @Metadata({ data: "json, name=dateContentPublished" })
  dateContentPublished?: Date;

  @Metadata({ data: "json, name=dateContentReviewed" })
  dateContentReviewed?: Date;

  @Metadata({ data: "json, name=dateContentUpdated" })
  dateContentUpdated?: Date;

  @Metadata({ data: "json, name=dateSyndicationCaptured" })
  dateSyndicationCaptured?: Date;

  @Metadata({ data: "json, name=dateSyndicationUpdated" })
  dateSyndicationUpdated?: Date;

  @Metadata({ data: "json, name=dateSyndicationVisible" })
  dateSyndicationVisible?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=extendedAttributes", elemType: shared.ExtendedAttribute })
  extendedAttributes?: ExtendedAttribute[];

  @Metadata({ data: "json, name=externalGuid" })
  externalGuid?: string;

  @Metadata({ data: "json, name=foreignSyndicationAPIUrl" })
  foreignSyndicationApiUrl?: string;

  @Metadata({ data: "json, name=hash" })
  hash?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=language" })
  language?: Language;

  @Metadata({ data: "json, name=mediaType" })
  mediaType?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=source" })
  source?: Source;

  @Metadata({ data: "json, name=sourceUrl" })
  sourceUrl?: string;

  @Metadata({ data: "json, name=targetUrl" })
  targetUrl?: string;
}
