import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OutlierResponseTypeEnum {
    Additive = "Additive"
,    LevelShift = "LevelShift"
,    TemporaryChange = "TemporaryChange"
,    Seasonal = "Seasonal"
}


export class OutlierResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=type" })
  type?: OutlierResponseTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
