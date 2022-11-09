import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OutlierResponse } from "./outlierresponse";


export class TimeSeriesOutliersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=outliers", elemType: shared.OutlierResponse })
  outliers?: OutlierResponse[];

  @Metadata({ data: "json, name=timeSeriesId" })
  timeSeriesId?: string;
}
