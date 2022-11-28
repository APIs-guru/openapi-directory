import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CostMatrixDataInfo
/** 
 * Additional information for your request
**/
export class CostMatrixDataInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyrights" })
  copyrights?: string[];

  @SpeakeasyMetadata({ data: "json, name=took" })
  took?: number;
}


// CostMatrixData
/** 
 * JSON data of matrix response
**/
export class CostMatrixData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distances" })
  distances?: number[][];

  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: CostMatrixDataInfo;

  @SpeakeasyMetadata({ data: "json, name=times" })
  times?: number[][];
}

export enum CostMatrixTypeEnum {
    Default = "default",
    Google = "google"
}


export class CostMatrix extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: CostMatrixData;

  @SpeakeasyMetadata({ data: "json, name=location_ids" })
  locationIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CostMatrixTypeEnum;
}
