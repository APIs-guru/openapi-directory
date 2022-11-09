import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Api } from "./api";
import { Authentication } from "./authentication";
import { Documentation } from "./documentation";
import { Endpoint } from "./endpoint";
import { MonitoredResourceDescriptor } from "./monitoredresourcedescriptor";
import { Monitoring } from "./monitoring";
import { Quota } from "./quota";
import { Usage } from "./usage";


// GoogleApiServiceusageV1ServiceConfig
/** 
 * The configuration of the service.
**/
export class GoogleApiServiceusageV1ServiceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=apis", elemType: shared.Api })
  apis?: Api[];

  @Metadata({ data: "json, name=authentication" })
  authentication?: Authentication;

  @Metadata({ data: "json, name=documentation" })
  documentation?: Documentation;

  @Metadata({ data: "json, name=endpoints", elemType: shared.Endpoint })
  endpoints?: Endpoint[];

  @Metadata({ data: "json, name=monitoredResources", elemType: shared.MonitoredResourceDescriptor })
  monitoredResources?: MonitoredResourceDescriptor[];

  @Metadata({ data: "json, name=monitoring" })
  monitoring?: Monitoring;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=quota" })
  quota?: Quota;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=usage" })
  usage?: Usage;
}
