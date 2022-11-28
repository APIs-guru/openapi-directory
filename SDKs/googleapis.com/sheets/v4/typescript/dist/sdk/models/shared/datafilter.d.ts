import { SpeakeasyBase } from "../../../internal/utils";
import { DeveloperMetadataLookup } from "./developermetadatalookup";
import { GridRange } from "./gridrange";
/**
 * Filter that describes what data should be selected or returned from a request.
**/
export declare class DataFilter extends SpeakeasyBase {
    a1Range?: string;
    developerMetadataLookup?: DeveloperMetadataLookup;
    gridRange?: GridRange;
}
