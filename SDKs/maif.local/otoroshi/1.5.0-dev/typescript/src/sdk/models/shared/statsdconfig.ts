import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StatsdConfig
/** 
 * The configuration for statsd metrics push
**/
export class StatsdConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=datadog" })
  datadog: boolean;

  @Metadata({ data: "json, name=host" })
  host: string;

  @Metadata({ data: "json, name=port" })
  port: number;
}
