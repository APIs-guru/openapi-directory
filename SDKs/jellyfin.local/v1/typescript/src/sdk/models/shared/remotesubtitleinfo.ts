import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoteSubtitleInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Author" })
  author?: string;

  @Metadata({ data: "json, name=Comment" })
  comment?: string;

  @Metadata({ data: "json, name=CommunityRating" })
  communityRating?: number;

  @Metadata({ data: "json, name=DateCreated" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=DownloadCount" })
  downloadCount?: number;

  @Metadata({ data: "json, name=Format" })
  format?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=IsHashMatch" })
  isHashMatch?: boolean;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ProviderName" })
  providerName?: string;

  @Metadata({ data: "json, name=ThreeLetterISOLanguageName" })
  threeLetterIsoLanguageName?: string;
}
