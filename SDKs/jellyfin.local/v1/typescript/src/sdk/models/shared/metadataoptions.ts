import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetadataOptions
/** 
 * Class MetadataOptions.
**/
export class MetadataOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=DisabledImageFetchers" })
  disabledImageFetchers?: string[];

  @Metadata({ data: "json, name=DisabledMetadataFetchers" })
  disabledMetadataFetchers?: string[];

  @Metadata({ data: "json, name=DisabledMetadataSavers" })
  disabledMetadataSavers?: string[];

  @Metadata({ data: "json, name=ImageFetcherOrder" })
  imageFetcherOrder?: string[];

  @Metadata({ data: "json, name=ItemType" })
  itemType?: string;

  @Metadata({ data: "json, name=LocalMetadataReaderOrder" })
  localMetadataReaderOrder?: string[];

  @Metadata({ data: "json, name=MetadataFetcherOrder" })
  metadataFetcherOrder?: string[];
}
