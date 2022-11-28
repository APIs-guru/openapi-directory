import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";



// CreateTimeSeriesSummary
/** 
 * Summary of the result of a failed request to write data to a time series.
**/
export class CreateTimeSeriesSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: Error })
  errors?: Error[];

  @SpeakeasyMetadata({ data: "json, name=successPointCount" })
  successPointCount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPointCount" })
  totalPointCount?: number;
}
