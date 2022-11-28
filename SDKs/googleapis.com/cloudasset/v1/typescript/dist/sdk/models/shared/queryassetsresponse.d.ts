import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { QueryAssetsOutputConfig } from "./queryassetsoutputconfig";
import { QueryResult } from "./queryresult";
/**
 * QueryAssets response.
**/
export declare class QueryAssetsResponse extends SpeakeasyBase {
    done?: boolean;
    error?: Status;
    jobReference?: string;
    outputConfig?: QueryAssetsOutputConfig;
    queryResult?: QueryResult;
}
