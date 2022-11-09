import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RewindTimeSeriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerError" })
  customerError?: number;

  @Metadata({ data: "json, name=errorDiff" })
  errorDiff?: number;

  @Metadata({ data: "json, name=icueError" })
  icueError?: number;

  @Metadata({ data: "json, name=timeSeries" })
  timeSeries?: string;

  @Metadata({ data: "json, name=totalCost" })
  totalCost?: number;

  @Metadata({ data: "json, name=useIcue" })
  useIcue?: boolean;
}
