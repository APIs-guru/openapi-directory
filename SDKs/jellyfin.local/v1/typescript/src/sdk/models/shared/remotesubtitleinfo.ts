import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoteSubtitleInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Author" })
  author?: string;

  @SpeakeasyMetadata({ data: "json, name=Comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=CommunityRating" })
  communityRating?: number;

  @SpeakeasyMetadata({ data: "json, name=DateCreated" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=DownloadCount" })
  downloadCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=IsHashMatch" })
  isHashMatch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ProviderName" })
  providerName?: string;

  @SpeakeasyMetadata({ data: "json, name=ThreeLetterISOLanguageName" })
  threeLetterIsoLanguageName?: string;
}
