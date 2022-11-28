import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
import { DeveloperMetadata } from "./developermetadata";
/**
 * Properties about a dimension.
**/
export declare class DimensionProperties extends SpeakeasyBase {
    dataSourceColumnReference?: DataSourceColumnReference;
    developerMetadata?: DeveloperMetadata[];
    hiddenByFilter?: boolean;
    hiddenByUser?: boolean;
    pixelSize?: number;
}
