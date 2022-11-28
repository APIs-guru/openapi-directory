import { SpeakeasyBase } from "../../../internal/utils";
import { Api } from "./api";
import { Authentication } from "./authentication";
import { Documentation } from "./documentation";
import { Endpoint } from "./endpoint";
import { MonitoredResourceDescriptor } from "./monitoredresourcedescriptor";
import { Monitoring } from "./monitoring";
import { Quota } from "./quota";
import { Usage } from "./usage";
/**
 * The configuration of the service.
**/
export declare class ServiceConfig extends SpeakeasyBase {
    apis?: Api[];
    authentication?: Authentication;
    documentation?: Documentation;
    endpoints?: Endpoint[];
    monitoredResources?: MonitoredResourceDescriptor[];
    monitoring?: Monitoring;
    name?: string;
    quota?: Quota;
    title?: string;
    usage?: Usage;
}
