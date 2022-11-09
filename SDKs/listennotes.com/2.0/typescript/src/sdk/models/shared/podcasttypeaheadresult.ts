import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PodcastTypeaheadResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=explicit_content" })
  explicitContent?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=publisher_highlighted" })
  publisherHighlighted?: string;

  @Metadata({ data: "json, name=publisher_original" })
  publisherOriginal?: string;

  @Metadata({ data: "json, name=thumbnail" })
  thumbnail?: string;

  @Metadata({ data: "json, name=title_highlighted" })
  titleHighlighted?: string;

  @Metadata({ data: "json, name=title_original" })
  titleOriginal?: string;
}
