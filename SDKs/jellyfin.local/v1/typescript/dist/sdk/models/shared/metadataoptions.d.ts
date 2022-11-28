import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Class MetadataOptions.
**/
export declare class MetadataOptions extends SpeakeasyBase {
    disabledImageFetchers?: string[];
    disabledMetadataFetchers?: string[];
    disabledMetadataSavers?: string[];
    imageFetcherOrder?: string[];
    itemType?: string;
    localMetadataReaderOrder?: string[];
    metadataFetcherOrder?: string[];
}
