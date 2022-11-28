import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MovieInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexNumber" })
  indexNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=IsAutomated" })
  isAutomated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MetadataCountryCode" })
  metadataCountryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=MetadataLanguage" })
  metadataLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentIndexNumber" })
  parentIndexNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=PremiereDate" })
  premiereDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ProviderIds" })
  providerIds?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Year" })
  year?: number;
}
