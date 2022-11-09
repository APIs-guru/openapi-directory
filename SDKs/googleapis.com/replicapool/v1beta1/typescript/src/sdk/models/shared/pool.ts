import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HealthCheck } from "./healthcheck";
import { Label } from "./label";
import { Template } from "./template";


export class Pool extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoRestart" })
  autoRestart?: boolean;

  @Metadata({ data: "json, name=baseInstanceName" })
  baseInstanceName?: string;

  @Metadata({ data: "json, name=currentNumReplicas" })
  currentNumReplicas?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=healthChecks", elemType: shared.HealthCheck })
  healthChecks?: HealthCheck[];

  @Metadata({ data: "json, name=initialNumReplicas" })
  initialNumReplicas?: number;

  @Metadata({ data: "json, name=labels", elemType: shared.Label })
  labels?: Label[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=numReplicas" })
  numReplicas?: number;

  @Metadata({ data: "json, name=resourceViews" })
  resourceViews?: string[];

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=targetPool" })
  targetPool?: string;

  @Metadata({ data: "json, name=targetPools" })
  targetPools?: string[];

  @Metadata({ data: "json, name=template" })
  template?: Template;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
