import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageOption } from "./imageoption";



export class TypeOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageFetcherOrder" })
  imageFetcherOrder?: string[];

  @SpeakeasyMetadata({ data: "json, name=ImageFetchers" })
  imageFetchers?: string[];

  @SpeakeasyMetadata({ data: "json, name=ImageOptions", elemType: ImageOption })
  imageOptions?: ImageOption[];

  @SpeakeasyMetadata({ data: "json, name=MetadataFetcherOrder" })
  metadataFetcherOrder?: string[];

  @SpeakeasyMetadata({ data: "json, name=MetadataFetchers" })
  metadataFetchers?: string[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
