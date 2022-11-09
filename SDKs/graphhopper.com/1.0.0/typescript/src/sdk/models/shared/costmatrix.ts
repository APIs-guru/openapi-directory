import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CostMatrixDataInfo
/** 
 * Additional information for your request
**/
export class CostMatrixDataInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyrights" })
  copyrights?: string[];

  @Metadata({ data: "json, name=took" })
  took?: number;
}


// CostMatrixData
/** 
 * JSON data of matrix response
**/
export class CostMatrixData extends SpeakeasyBase {
  @Metadata({ data: "json, name=distances" })
  distances?: number[][];

  @Metadata({ data: "json, name=info" })
  info?: CostMatrixDataInfo;

  @Metadata({ data: "json, name=times" })
  times?: number[][];
}

export enum CostMatrixTypeEnum {
    Default = "default"
,    Google = "google"
}


export class CostMatrix extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: CostMatrixData;

  @Metadata({ data: "json, name=location_ids" })
  locationIds?: string[];

  @Metadata({ data: "json, name=profile" })
  profile?: string;

  @Metadata({ data: "json, name=type" })
  type?: CostMatrixTypeEnum;
}
