import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnterpriseCrmEventbusStatsDimensions } from "./enterprisecrmeventbusstatsdimensions";


// EnterpriseCrmEventbusStats
/** 
 * Stats for the requested dimensions: QPS, duration, and error/warning rate
**/
export class EnterpriseCrmEventbusStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensions" })
  dimensions?: EnterpriseCrmEventbusStatsDimensions;

  @Metadata({ data: "json, name=durationInSeconds" })
  durationInSeconds?: number;

  @Metadata({ data: "json, name=errorRate" })
  errorRate?: number;

  @Metadata({ data: "json, name=qps" })
  qps?: number;

  @Metadata({ data: "json, name=warningRate" })
  warningRate?: number;
}
