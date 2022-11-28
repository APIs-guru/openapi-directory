import { SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";
import { DeveloperMetadata } from "./developermetadata";
/**
 * A request to update properties of developer metadata. Updates the properties of the developer metadata selected by the filters to the values provided in the DeveloperMetadata resource. Callers must specify the properties they wish to update in the fields parameter, as well as specify at least one DataFilter matching the metadata they wish to update.
**/
export declare class UpdateDeveloperMetadataRequest extends SpeakeasyBase {
    dataFilters?: DataFilter[];
    developerMetadata?: DeveloperMetadata;
    fields?: string;
}
