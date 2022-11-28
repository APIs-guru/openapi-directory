import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { QueryAssetsOutputConfig } from "./queryassetsoutputconfig";
import { QueryResult } from "./queryresult";



// QueryAssetsResponse
/** 
 * QueryAssets response.
**/
export class QueryAssetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=done" })
  done?: boolean;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=jobReference" })
  jobReference?: string;

  @SpeakeasyMetadata({ data: "json, name=outputConfig" })
  outputConfig?: QueryAssetsOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=queryResult" })
  queryResult?: QueryResult;
}
