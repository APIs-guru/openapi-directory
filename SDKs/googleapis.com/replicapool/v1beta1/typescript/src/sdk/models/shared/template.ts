import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { HealthCheck } from "./healthcheck";
import { VmParams } from "./vmparams";



// Template
/** 
 * The template used for creating replicas in the pool.
**/
export class Template extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: Action;

  @SpeakeasyMetadata({ data: "json, name=healthChecks", elemType: HealthCheck })
  healthChecks?: HealthCheck[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=vmParams" })
  vmParams?: VmParams;
}
