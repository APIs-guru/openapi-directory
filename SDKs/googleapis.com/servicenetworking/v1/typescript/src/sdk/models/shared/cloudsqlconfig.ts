import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudSqlConfig
/** 
 * Cloud SQL configuration.
**/
export class CloudSqlConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=service" })
  service?: string;

  @Metadata({ data: "json, name=umbrellaNetwork" })
  umbrellaNetwork?: string;

  @Metadata({ data: "json, name=umbrellaProject" })
  umbrellaProject?: string;
}
