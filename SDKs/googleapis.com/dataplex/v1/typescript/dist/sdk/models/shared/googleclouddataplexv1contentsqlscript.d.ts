import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDataplexV1ContentSqlScriptEngineEnum {
    QueryEngineUnspecified = "QUERY_ENGINE_UNSPECIFIED",
    Spark = "SPARK"
}
/**
 * Configuration for the Sql Script content.
**/
export declare class GoogleCloudDataplexV1ContentSqlScript extends SpeakeasyBase {
    engine?: GoogleCloudDataplexV1ContentSqlScriptEngineEnum;
}
