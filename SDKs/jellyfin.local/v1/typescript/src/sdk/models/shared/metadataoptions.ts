import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetadataOptions
/** 
 * Class MetadataOptions.
**/
export class MetadataOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DisabledImageFetchers" })
  disabledImageFetchers?: string[];

  @SpeakeasyMetadata({ data: "json, name=DisabledMetadataFetchers" })
  disabledMetadataFetchers?: string[];

  @SpeakeasyMetadata({ data: "json, name=DisabledMetadataSavers" })
  disabledMetadataSavers?: string[];

  @SpeakeasyMetadata({ data: "json, name=ImageFetcherOrder" })
  imageFetcherOrder?: string[];

  @SpeakeasyMetadata({ data: "json, name=ItemType" })
  itemType?: string;

  @SpeakeasyMetadata({ data: "json, name=LocalMetadataReaderOrder" })
  localMetadataReaderOrder?: string[];

  @SpeakeasyMetadata({ data: "json, name=MetadataFetcherOrder" })
  metadataFetcherOrder?: string[];
}
