import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// Sheet
/** 
 * A sheet in a spreadsheet.
**/
export class Sheet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandedRanges", elemType: BandedRange })
  bandedRanges?: BandedRange[];

  @SpeakeasyMetadata({ data: "json, name=basicFilter" })
  basicFilter?: BasicFilter;

  @SpeakeasyMetadata({ data: "json, name=charts", elemType: EmbeddedChart })
  charts?: EmbeddedChart[];

  @SpeakeasyMetadata({ data: "json, name=columnGroups", elemType: DimensionGroup })
  columnGroups?: DimensionGroup[];

  @SpeakeasyMetadata({ data: "json, name=conditionalFormats", elemType: ConditionalFormatRule })
  conditionalFormats?: ConditionalFormatRule[];

  @SpeakeasyMetadata({ data: "json, name=data", elemType: GridData })
  data?: GridData[];

  @SpeakeasyMetadata({ data: "json, name=developerMetadata", elemType: DeveloperMetadata })
  developerMetadata?: DeveloperMetadata[];

  @SpeakeasyMetadata({ data: "json, name=filterViews", elemType: FilterView })
  filterViews?: FilterView[];

  @SpeakeasyMetadata({ data: "json, name=merges", elemType: GridRange })
  merges?: GridRange[];

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: SheetProperties;

  @SpeakeasyMetadata({ data: "json, name=protectedRanges", elemType: ProtectedRange })
  protectedRanges?: ProtectedRange[];

  @SpeakeasyMetadata({ data: "json, name=rowGroups", elemType: DimensionGroup })
  rowGroups?: DimensionGroup[];

  @SpeakeasyMetadata({ data: "json, name=slicers", elemType: Slicer })
  slicers?: Slicer[];
}
