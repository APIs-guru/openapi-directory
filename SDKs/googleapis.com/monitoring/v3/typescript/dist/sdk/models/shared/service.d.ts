import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * A Service is a discrete, autonomous, and network-accessible unit, designed to solve an individual concern (Wikipedia (https://en.wikipedia.org/wiki/Service-orientation)). In Cloud Monitoring, a Service acts as the root resource under which operational aspects of the service are accessible.
**/
export declare class Service extends SpeakeasyBase {
    appEngine?: AppEngine;
    basicService?: BasicService;
    cloudEndpoints?: CloudEndpoints;
    cloudRun?: CloudRun;
    clusterIstio?: ClusterIstio;
    custom?: Map<string, any>;
    displayName?: string;
    gkeNamespace?: GkeNamespace;
    gkeService?: GkeService;
    gkeWorkload?: GkeWorkload;
    istioCanonicalService?: IstioCanonicalService;
    meshIstio?: MeshIstio;
    name?: string;
    telemetry?: Telemetry;
    userLabels?: Map<string, string>;
}
/**
 * A Service is a discrete, autonomous, and network-accessible unit, designed to solve an individual concern (Wikipedia (https://en.wikipedia.org/wiki/Service-orientation)). In Cloud Monitoring, a Service acts as the root resource under which operational aspects of the service are accessible.
**/
export declare class ServiceInput extends SpeakeasyBase {
    appEngine?: AppEngine;
    basicService?: BasicService;
    cloudEndpoints?: CloudEndpoints;
    cloudRun?: CloudRun;
    clusterIstio?: ClusterIstio;
    custom?: Map<string, any>;
    displayName?: string;
    gkeNamespace?: GkeNamespaceInput;
    gkeService?: GkeServiceInput;
    gkeWorkload?: GkeWorkloadInput;
    istioCanonicalService?: IstioCanonicalService;
    meshIstio?: MeshIstio;
    name?: string;
    telemetry?: Telemetry;
    userLabels?: Map<string, string>;
}
