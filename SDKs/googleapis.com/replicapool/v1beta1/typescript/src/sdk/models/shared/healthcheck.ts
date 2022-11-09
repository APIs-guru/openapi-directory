import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class HealthCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkIntervalSec" })
  checkIntervalSec?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=healthyThreshold" })
  healthyThreshold?: number;

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=timeoutSec" })
  timeoutSec?: number;

  @Metadata({ data: "json, name=unhealthyThreshold" })
  unhealthyThreshold?: number;
}
