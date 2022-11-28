import { SpeakeasyBase } from "../../../internal/utils";
import { QueryList } from "./querylist";
/**
 * A Dataproc job for running Apache Hive (https://hive.apache.org/) queries on YARN.
**/
export declare class HiveJob extends SpeakeasyBase {
    continueOnFailure?: boolean;
    jarFileUris?: string[];
    properties?: Map<string, string>;
    queryFileUri?: string;
    queryList?: QueryList;
    scriptVariables?: Map<string, string>;
}
