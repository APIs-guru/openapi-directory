import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudSqlConfig
/** 
 * Cloud SQL configuration.
**/
export class CloudSqlConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;

  @SpeakeasyMetadata({ data: "json, name=umbrellaNetwork" })
  umbrellaNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=umbrellaProject" })
  umbrellaProject?: string;
}
