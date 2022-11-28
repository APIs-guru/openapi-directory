import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusStatsDimensions } from "./enterprisecrmeventbusstatsdimensions";



// EnterpriseCrmEventbusStats
/** 
 * Stats for the requested dimensions: QPS, duration, and error/warning rate
**/
export class EnterpriseCrmEventbusStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: EnterpriseCrmEventbusStatsDimensions;

  @SpeakeasyMetadata({ data: "json, name=durationInSeconds" })
  durationInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=errorRate" })
  errorRate?: number;

  @SpeakeasyMetadata({ data: "json, name=qps" })
  qps?: number;

  @SpeakeasyMetadata({ data: "json, name=warningRate" })
  warningRate?: number;
}
