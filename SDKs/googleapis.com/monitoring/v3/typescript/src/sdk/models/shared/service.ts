import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
import { GkeNamespaceInput } from "./gkenamespace";
import { GkeServiceInput } from "./gkeservice";
import { GkeWorkloadInput } from "./gkeworkload";



// Service
/** 
 * A Service is a discrete, autonomous, and network-accessible unit, designed to solve an individual concern (Wikipedia (https://en.wikipedia.org/wiki/Service-orientation)). In Cloud Monitoring, a Service acts as the root resource under which operational aspects of the service are accessible.
**/
export class Service extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appEngine" })
  appEngine?: AppEngine;

  @SpeakeasyMetadata({ data: "json, name=basicService" })
  basicService?: BasicService;

  @SpeakeasyMetadata({ data: "json, name=cloudEndpoints" })
  cloudEndpoints?: CloudEndpoints;

  @SpeakeasyMetadata({ data: "json, name=cloudRun" })
  cloudRun?: CloudRun;

  @SpeakeasyMetadata({ data: "json, name=clusterIstio" })
  clusterIstio?: ClusterIstio;

  @SpeakeasyMetadata({ data: "json, name=custom" })
  custom?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=gkeNamespace" })
  gkeNamespace?: GkeNamespace;

  @SpeakeasyMetadata({ data: "json, name=gkeService" })
  gkeService?: GkeService;

  @SpeakeasyMetadata({ data: "json, name=gkeWorkload" })
  gkeWorkload?: GkeWorkload;

  @SpeakeasyMetadata({ data: "json, name=istioCanonicalService" })
  istioCanonicalService?: IstioCanonicalService;

  @SpeakeasyMetadata({ data: "json, name=meshIstio" })
  meshIstio?: MeshIstio;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=telemetry" })
  telemetry?: Telemetry;

  @SpeakeasyMetadata({ data: "json, name=userLabels" })
  userLabels?: Map<string, string>;
}


// ServiceInput
/** 
 * A Service is a discrete, autonomous, and network-accessible unit, designed to solve an individual concern (Wikipedia (https://en.wikipedia.org/wiki/Service-orientation)). In Cloud Monitoring, a Service acts as the root resource under which operational aspects of the service are accessible.
**/
export class ServiceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appEngine" })
  appEngine?: AppEngine;

  @SpeakeasyMetadata({ data: "json, name=basicService" })
  basicService?: BasicService;

  @SpeakeasyMetadata({ data: "json, name=cloudEndpoints" })
  cloudEndpoints?: CloudEndpoints;

  @SpeakeasyMetadata({ data: "json, name=cloudRun" })
  cloudRun?: CloudRun;

  @SpeakeasyMetadata({ data: "json, name=clusterIstio" })
  clusterIstio?: ClusterIstio;

  @SpeakeasyMetadata({ data: "json, name=custom" })
  custom?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=gkeNamespace" })
  gkeNamespace?: GkeNamespaceInput;

  @SpeakeasyMetadata({ data: "json, name=gkeService" })
  gkeService?: GkeServiceInput;

  @SpeakeasyMetadata({ data: "json, name=gkeWorkload" })
  gkeWorkload?: GkeWorkloadInput;

  @SpeakeasyMetadata({ data: "json, name=istioCanonicalService" })
  istioCanonicalService?: IstioCanonicalService;

  @SpeakeasyMetadata({ data: "json, name=meshIstio" })
  meshIstio?: MeshIstio;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=telemetry" })
  telemetry?: Telemetry;

  @SpeakeasyMetadata({ data: "json, name=userLabels" })
  userLabels?: Map<string, string>;
}
