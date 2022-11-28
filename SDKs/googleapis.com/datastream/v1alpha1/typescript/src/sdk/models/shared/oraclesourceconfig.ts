import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OracleRdbms } from "./oraclerdbms";



// OracleSourceConfig
/** 
 * Oracle data source configuration
**/
export class OracleSourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowlist" })
  allowlist?: OracleRdbms;

  @SpeakeasyMetadata({ data: "json, name=dropLargeObjects" })
  dropLargeObjects?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=rejectlist" })
  rejectlist?: OracleRdbms;
}
