import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
import { DeveloperMetadata } from "./developermetadata";



// DimensionProperties
/** 
 * Properties about a dimension.
**/
export class DimensionProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSourceColumnReference" })
  dataSourceColumnReference?: DataSourceColumnReference;

  @SpeakeasyMetadata({ data: "json, name=developerMetadata", elemType: DeveloperMetadata })
  developerMetadata?: DeveloperMetadata[];

  @SpeakeasyMetadata({ data: "json, name=hiddenByFilter" })
  hiddenByFilter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hiddenByUser" })
  hiddenByUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pixelSize" })
  pixelSize?: number;
}
