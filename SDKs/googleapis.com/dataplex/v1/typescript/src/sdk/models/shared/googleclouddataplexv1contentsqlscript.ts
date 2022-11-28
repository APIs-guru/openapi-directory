import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDataplexV1ContentSqlScriptEngineEnum {
    QueryEngineUnspecified = "QUERY_ENGINE_UNSPECIFIED",
    Spark = "SPARK"
}


// GoogleCloudDataplexV1ContentSqlScript
/** 
 * Configuration for the Sql Script content.
**/
export class GoogleCloudDataplexV1ContentSqlScript extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=engine" })
  engine?: GoogleCloudDataplexV1ContentSqlScriptEngineEnum;
}
