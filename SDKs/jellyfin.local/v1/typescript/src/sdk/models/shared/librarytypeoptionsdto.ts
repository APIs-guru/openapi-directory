import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageOption } from "./imageoption";
import { LibraryOptionInfoDto } from "./libraryoptioninfodto";
import { ImageTypeEnum } from "./imagetypeenum";



// LibraryTypeOptionsDto
/** 
 * Library type options dto.
**/
export class LibraryTypeOptionsDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultImageOptions", elemType: ImageOption })
  defaultImageOptions?: ImageOption[];

  @SpeakeasyMetadata({ data: "json, name=ImageFetchers", elemType: LibraryOptionInfoDto })
  imageFetchers?: LibraryOptionInfoDto[];

  @SpeakeasyMetadata({ data: "json, name=MetadataFetchers", elemType: LibraryOptionInfoDto })
  metadataFetchers?: LibraryOptionInfoDto[];

  @SpeakeasyMetadata({ data: "json, name=SupportedImageTypes" })
  supportedImageTypes?: ImageTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
