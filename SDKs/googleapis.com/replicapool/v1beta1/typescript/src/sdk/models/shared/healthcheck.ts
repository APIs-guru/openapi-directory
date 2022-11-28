import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HealthCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkIntervalSec" })
  checkIntervalSec?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=healthyThreshold" })
  healthyThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutSec" })
  timeoutSec?: number;

  @SpeakeasyMetadata({ data: "json, name=unhealthyThreshold" })
  unhealthyThreshold?: number;
}
