import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OutlierResponse } from "./outlierresponse";



export class TimeSeriesOutliersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outliers", elemType: OutlierResponse })
  outliers?: OutlierResponse[];

  @SpeakeasyMetadata({ data: "json, name=timeSeriesId" })
  timeSeriesId?: string;
}
