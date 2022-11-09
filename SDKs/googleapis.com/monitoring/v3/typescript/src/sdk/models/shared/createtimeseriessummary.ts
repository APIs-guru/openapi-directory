import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";


// CreateTimeSeriesSummary
/** 
 * Summary of the result of a failed request to write data to a time series.
**/
export class CreateTimeSeriesSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=successPointCount" })
  successPointCount?: number;

  @Metadata({ data: "json, name=totalPointCount" })
  totalPointCount?: number;
}
