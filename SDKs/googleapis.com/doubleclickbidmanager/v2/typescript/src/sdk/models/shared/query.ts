import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryMetadata } from "./querymetadata";
import { Parameters } from "./parameters";
import { QuerySchedule } from "./queryschedule";



// QueryInput
/** 
 * Represents a query.
**/
export class QueryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: QueryMetadata;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: Parameters;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: QuerySchedule;
}


// Query
/** 
 * Represents a query.
**/
export class Query extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: QueryMetadata;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: Parameters;

  @SpeakeasyMetadata({ data: "json, name=queryId" })
  queryId?: string;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: QuerySchedule;
}
