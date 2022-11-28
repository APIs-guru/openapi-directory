import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryMetadata } from "./querymetadata";
import { Parameters } from "./parameters";
import { QuerySchedule } from "./queryschedule";



// Query
/** 
 * Represents a query.
**/
export class Query extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: QueryMetadata;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: Parameters;

  @SpeakeasyMetadata({ data: "json, name=queryId" })
  queryId?: string;

  @SpeakeasyMetadata({ data: "json, name=reportDataEndTimeMs" })
  reportDataEndTimeMs?: string;

  @SpeakeasyMetadata({ data: "json, name=reportDataStartTimeMs" })
  reportDataStartTimeMs?: string;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: QuerySchedule;

  @SpeakeasyMetadata({ data: "json, name=timezoneCode" })
  timezoneCode?: string;
}
