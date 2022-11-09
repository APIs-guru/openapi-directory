import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QueryMetadata } from "./querymetadata";
import { Parameters } from "./parameters";
import { QuerySchedule } from "./queryschedule";


// Query
/** 
 * Represents a query.
**/
export class Query extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: QueryMetadata;

  @Metadata({ data: "json, name=params" })
  params?: Parameters;

  @Metadata({ data: "json, name=queryId" })
  queryId?: string;

  @Metadata({ data: "json, name=reportDataEndTimeMs" })
  reportDataEndTimeMs?: string;

  @Metadata({ data: "json, name=reportDataStartTimeMs" })
  reportDataStartTimeMs?: string;

  @Metadata({ data: "json, name=schedule" })
  schedule?: QuerySchedule;

  @Metadata({ data: "json, name=timezoneCode" })
  timezoneCode?: string;
}
