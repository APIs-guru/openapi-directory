import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
import { DimensionGroup } from "./dimensiongroup";
import { Slicer } from "./slicer";


// Sheet
/** 
 * A sheet in a spreadsheet.
**/
export class Sheet extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandedRanges", elemType: shared.BandedRange })
  bandedRanges?: BandedRange[];

  @Metadata({ data: "json, name=basicFilter" })
  basicFilter?: BasicFilter;

  @Metadata({ data: "json, name=charts", elemType: shared.EmbeddedChart })
  charts?: EmbeddedChart[];

  @Metadata({ data: "json, name=columnGroups", elemType: shared.DimensionGroup })
  columnGroups?: DimensionGroup[];

  @Metadata({ data: "json, name=conditionalFormats", elemType: shared.ConditionalFormatRule })
  conditionalFormats?: ConditionalFormatRule[];

  @Metadata({ data: "json, name=data", elemType: shared.GridData })
  data?: GridData[];

  @Metadata({ data: "json, name=developerMetadata", elemType: shared.DeveloperMetadata })
  developerMetadata?: DeveloperMetadata[];

  @Metadata({ data: "json, name=filterViews", elemType: shared.FilterView })
  filterViews?: FilterView[];

  @Metadata({ data: "json, name=merges", elemType: shared.GridRange })
  merges?: GridRange[];

  @Metadata({ data: "json, name=properties" })
  properties?: SheetProperties;

  @Metadata({ data: "json, name=protectedRanges", elemType: shared.ProtectedRange })
  protectedRanges?: ProtectedRange[];

  @Metadata({ data: "json, name=rowGroups", elemType: shared.DimensionGroup })
  rowGroups?: DimensionGroup[];

  @Metadata({ data: "json, name=slicers", elemType: shared.Slicer })
  slicers?: Slicer[];
}
