import { SpeakeasyBase } from "../../../internal/utils";
import { ImageOption } from "./imageoption";
import { LibraryOptionInfoDto } from "./libraryoptioninfodto";
import { ImageTypeEnum } from "./imagetypeenum";
/**
 * Library type options dto.
**/
export declare class LibraryTypeOptionsDto extends SpeakeasyBase {
    defaultImageOptions?: ImageOption[];
    imageFetchers?: LibraryOptionInfoDto[];
    metadataFetchers?: LibraryOptionInfoDto[];
    supportedImageTypes?: ImageTypeEnum[];
    type?: string;
}
