import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImageOption } from "./imageoption";


export class TypeOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImageFetcherOrder" })
  imageFetcherOrder?: string[];

  @Metadata({ data: "json, name=ImageFetchers" })
  imageFetchers?: string[];

  @Metadata({ data: "json, name=ImageOptions", elemType: shared.ImageOption })
  imageOptions?: ImageOption[];

  @Metadata({ data: "json, name=MetadataFetcherOrder" })
  metadataFetcherOrder?: string[];

  @Metadata({ data: "json, name=MetadataFetchers" })
  metadataFetchers?: string[];

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
