import { SpeakeasyBase } from "../../../internal/utils";
import { QueryAssetsOutputConfig } from "./queryassetsoutputconfig";
import { TimeWindow } from "./timewindow";
/**
 * QueryAssets request.
**/
export declare class QueryAssetsRequest extends SpeakeasyBase {
    jobReference?: string;
    outputConfig?: QueryAssetsOutputConfig;
    pageSize?: number;
    pageToken?: string;
    readTime?: string;
    readTimeWindow?: TimeWindow;
    statement?: string;
    timeout?: string;
}
