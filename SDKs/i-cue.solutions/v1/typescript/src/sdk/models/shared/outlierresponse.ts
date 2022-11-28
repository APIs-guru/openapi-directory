import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OutlierResponseTypeEnum {
    Additive = "Additive",
    LevelShift = "LevelShift",
    TemporaryChange = "TemporaryChange",
    Seasonal = "Seasonal"
}


export class OutlierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: OutlierResponseTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
