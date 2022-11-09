import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LibraryOptionInfoDto } from "./libraryoptioninfodto";
import { LibraryOptionInfoDto } from "./libraryoptioninfodto";
import { LibraryOptionInfoDto } from "./libraryoptioninfodto";
import { LibraryTypeOptionsDto } from "./librarytypeoptionsdto";


// LibraryOptionsResultDto
/** 
 * Library options result dto.
**/
export class LibraryOptionsResultDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=MetadataReaders", elemType: shared.LibraryOptionInfoDto })
  metadataReaders?: LibraryOptionInfoDto[];

  @Metadata({ data: "json, name=MetadataSavers", elemType: shared.LibraryOptionInfoDto })
  metadataSavers?: LibraryOptionInfoDto[];

  @Metadata({ data: "json, name=SubtitleFetchers", elemType: shared.LibraryOptionInfoDto })
  subtitleFetchers?: LibraryOptionInfoDto[];

  @Metadata({ data: "json, name=TypeOptions", elemType: shared.LibraryTypeOptionsDto })
  typeOptions?: LibraryTypeOptionsDto[];
}
