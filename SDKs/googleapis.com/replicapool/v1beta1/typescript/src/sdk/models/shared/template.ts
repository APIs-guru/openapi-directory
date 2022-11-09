import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Action } from "./action";
import { HealthCheck } from "./healthcheck";
import { VmParams } from "./vmparams";


// Template
/** 
 * The template used for creating replicas in the pool.
**/
export class Template extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: Action;

  @Metadata({ data: "json, name=healthChecks", elemType: shared.HealthCheck })
  healthChecks?: HealthCheck[];

  @Metadata({ data: "json, name=version" })
  version?: string;

  @Metadata({ data: "json, name=vmParams" })
  vmParams?: VmParams;
}
