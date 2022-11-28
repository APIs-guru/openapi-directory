import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PodcastTypeaheadResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explicit_content" })
  explicitContent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=publisher_highlighted" })
  publisherHighlighted?: string;

  @SpeakeasyMetadata({ data: "json, name=publisher_original" })
  publisherOriginal?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnail" })
  thumbnail?: string;

  @SpeakeasyMetadata({ data: "json, name=title_highlighted" })
  titleHighlighted?: string;

  @SpeakeasyMetadata({ data: "json, name=title_original" })
  titleOriginal?: string;
}
