import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RewindTimeSeriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerError" })
  customerError?: number;

  @SpeakeasyMetadata({ data: "json, name=errorDiff" })
  errorDiff?: number;

  @SpeakeasyMetadata({ data: "json, name=icueError" })
  icueError?: number;

  @SpeakeasyMetadata({ data: "json, name=timeSeries" })
  timeSeries?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCost" })
  totalCost?: number;

  @SpeakeasyMetadata({ data: "json, name=useIcue" })
  useIcue?: boolean;
}
