import { SpeakeasyBase } from "../../../internal/utils";
import { ImageOption } from "./imageoption";
export declare class TypeOptions extends SpeakeasyBase {
    imageFetcherOrder?: string[];
    imageFetchers?: string[];
    imageOptions?: ImageOption[];
    metadataFetcherOrder?: string[];
    metadataFetchers?: string[];
    type?: string;
}
