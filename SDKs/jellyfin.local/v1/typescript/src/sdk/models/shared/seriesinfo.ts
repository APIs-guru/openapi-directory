import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SeriesInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndexNumber" })
  indexNumber?: number;

  @Metadata({ data: "json, name=IsAutomated" })
  isAutomated?: boolean;

  @Metadata({ data: "json, name=MetadataCountryCode" })
  metadataCountryCode?: string;

  @Metadata({ data: "json, name=MetadataLanguage" })
  metadataLanguage?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ParentIndexNumber" })
  parentIndexNumber?: number;

  @Metadata({ data: "json, name=Path" })
  path?: string;

  @Metadata({ data: "json, name=PremiereDate" })
  premiereDate?: Date;

  @Metadata({ data: "json, name=ProviderIds" })
  providerIds?: Map<string, string>;

  @Metadata({ data: "json, name=Year" })
  year?: number;
}
