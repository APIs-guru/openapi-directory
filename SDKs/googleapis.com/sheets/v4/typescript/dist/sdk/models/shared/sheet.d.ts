import { SpeakeasyBase } from "../../../internal/utils";
import { BandedRange } from "./bandedrange";
import { BasicFilter } from "./basicfilter";
import { EmbeddedChart } from "./embeddedchart";
import { DimensionGroup } from "./dimensiongroup";
import { ConditionalFormatRule } from "./conditionalformatrule";
import { GridData } from "./griddata";
import { DeveloperMetadata } from "./developermetadata";
import { FilterView } from "./filterview";
import { GridRange } from "./gridrange";
import { SheetProperties } from "./sheetproperties";
import { ProtectedRange } from "./protectedrange";
import { Slicer } from "./slicer";
/**
 * A sheet in a spreadsheet.
**/
export declare class Sheet extends SpeakeasyBase {
    bandedRanges?: BandedRange[];
    basicFilter?: BasicFilter;
    charts?: EmbeddedChart[];
    columnGroups?: DimensionGroup[];
    conditionalFormats?: ConditionalFormatRule[];
    data?: GridData[];
    developerMetadata?: DeveloperMetadata[];
    filterViews?: FilterView[];
    merges?: GridRange[];
    properties?: SheetProperties;
    protectedRanges?: ProtectedRange[];
    rowGroups?: DimensionGroup[];
    slicers?: Slicer[];
}
