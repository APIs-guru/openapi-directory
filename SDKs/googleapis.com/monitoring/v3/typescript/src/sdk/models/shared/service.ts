import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppEngine } from "./appengine";
import { BasicService } from "./basicservice";
import { CloudEndpoints } from "./cloudendpoints";
import { CloudRun } from "./cloudrun";
import { ClusterIstio } from "./clusteristio";
import { GkeNamespace } from "./gkenamespace";
import { GkeService } from "./gkeservice";
import { GkeWorkload } from "./gkeworkload";
import { IstioCanonicalService } from "./istiocanonicalservice";
import { MeshIstio } from "./meshistio";
import { Telemetry } from "./telemetry";


// Service
/** 
 * A Service is a discrete, autonomous, and network-accessible unit, designed to solve an individual concern (Wikipedia (https://en.wikipedia.org/wiki/Service-orientation)). In Cloud Monitoring, a Service acts as the root resource under which operational aspects of the service are accessible.
**/
export class Service extends SpeakeasyBase {
  @Metadata({ data: "json, name=appEngine" })
  appEngine?: AppEngine;

  @Metadata({ data: "json, name=basicService" })
  basicService?: BasicService;

  @Metadata({ data: "json, name=cloudEndpoints" })
  cloudEndpoints?: CloudEndpoints;

  @Metadata({ data: "json, name=cloudRun" })
  cloudRun?: CloudRun;

  @Metadata({ data: "json, name=clusterIstio" })
  clusterIstio?: ClusterIstio;

  @Metadata({ data: "json, name=custom" })
  custom?: Map<string, any>;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=gkeNamespace" })
  gkeNamespace?: GkeNamespace;

  @Metadata({ data: "json, name=gkeService" })
  gkeService?: GkeService;

  @Metadata({ data: "json, name=gkeWorkload" })
  gkeWorkload?: GkeWorkload;

  @Metadata({ data: "json, name=istioCanonicalService" })
  istioCanonicalService?: IstioCanonicalService;

  @Metadata({ data: "json, name=meshIstio" })
  meshIstio?: MeshIstio;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=telemetry" })
  telemetry?: Telemetry;

  @Metadata({ data: "json, name=userLabels" })
  userLabels?: Map<string, string>;
}
