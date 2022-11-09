import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
import { DeveloperMetadata } from "./developermetadata";


// DimensionProperties
/** 
 * Properties about a dimension.
**/
export class DimensionProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSourceColumnReference" })
  dataSourceColumnReference?: DataSourceColumnReference;

  @Metadata({ data: "json, name=developerMetadata", elemType: shared.DeveloperMetadata })
  developerMetadata?: DeveloperMetadata[];

  @Metadata({ data: "json, name=hiddenByFilter" })
  hiddenByFilter?: boolean;

  @Metadata({ data: "json, name=hiddenByUser" })
  hiddenByUser?: boolean;

  @Metadata({ data: "json, name=pixelSize" })
  pixelSize?: number;
}
