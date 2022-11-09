import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImageOption } from "./imageoption";
import { LibraryOptionInfoDto } from "./libraryoptioninfodto";
import { LibraryOptionInfoDto } from "./libraryoptioninfodto";
import { ImageTypeEnum } from "./imagetypeenum";


// LibraryTypeOptionsDto
/** 
 * Library type options dto.
**/
export class LibraryTypeOptionsDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultImageOptions", elemType: shared.ImageOption })
  defaultImageOptions?: ImageOption[];

  @Metadata({ data: "json, name=ImageFetchers", elemType: shared.LibraryOptionInfoDto })
  imageFetchers?: LibraryOptionInfoDto[];

  @Metadata({ data: "json, name=MetadataFetchers", elemType: shared.LibraryOptionInfoDto })
  metadataFetchers?: LibraryOptionInfoDto[];

  @Metadata({ data: "json, name=SupportedImageTypes" })
  supportedImageTypes?: ImageTypeEnum[];

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
