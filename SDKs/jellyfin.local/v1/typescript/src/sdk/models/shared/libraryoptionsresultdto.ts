import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LibraryOptionInfoDto } from "./libraryoptioninfodto";
import { LibraryTypeOptionsDto } from "./librarytypeoptionsdto";



// LibraryOptionsResultDto
/** 
 * Library options result dto.
**/
export class LibraryOptionsResultDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MetadataReaders", elemType: LibraryOptionInfoDto })
  metadataReaders?: LibraryOptionInfoDto[];

  @SpeakeasyMetadata({ data: "json, name=MetadataSavers", elemType: LibraryOptionInfoDto })
  metadataSavers?: LibraryOptionInfoDto[];

  @SpeakeasyMetadata({ data: "json, name=SubtitleFetchers", elemType: LibraryOptionInfoDto })
  subtitleFetchers?: LibraryOptionInfoDto[];

  @SpeakeasyMetadata({ data: "json, name=TypeOptions", elemType: LibraryTypeOptionsDto })
  typeOptions?: LibraryTypeOptionsDto[];
}
