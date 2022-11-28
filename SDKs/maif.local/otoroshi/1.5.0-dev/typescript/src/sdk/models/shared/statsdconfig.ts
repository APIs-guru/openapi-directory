import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StatsdConfig
/** 
 * The configuration for statsd metrics push
**/
export class StatsdConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datadog" })
  datadog: boolean;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port: number;
}
