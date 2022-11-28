import { SpeakeasyBase } from "../../../internal/utils";
import { LibraryOptionInfoDto } from "./libraryoptioninfodto";
import { LibraryTypeOptionsDto } from "./librarytypeoptionsdto";
/**
 * Library options result dto.
**/
export declare class LibraryOptionsResultDto extends SpeakeasyBase {
    metadataReaders?: LibraryOptionInfoDto[];
    metadataSavers?: LibraryOptionInfoDto[];
    subtitleFetchers?: LibraryOptionInfoDto[];
    typeOptions?: LibraryTypeOptionsDto[];
}
