import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HealthCheck } from "./healthcheck";
import { Label } from "./label";
import { Template } from "./template";



export class Pool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoRestart" })
  autoRestart?: boolean;

  @SpeakeasyMetadata({ data: "json, name=baseInstanceName" })
  baseInstanceName?: string;

  @SpeakeasyMetadata({ data: "json, name=currentNumReplicas" })
  currentNumReplicas?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=healthChecks", elemType: HealthCheck })
  healthChecks?: HealthCheck[];

  @SpeakeasyMetadata({ data: "json, name=initialNumReplicas" })
  initialNumReplicas?: number;

  @SpeakeasyMetadata({ data: "json, name=labels", elemType: Label })
  labels?: Label[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=numReplicas" })
  numReplicas?: number;

  @SpeakeasyMetadata({ data: "json, name=resourceViews" })
  resourceViews?: string[];

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=targetPool" })
  targetPool?: string;

  @SpeakeasyMetadata({ data: "json, name=targetPools" })
  targetPools?: string[];

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: Template;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
