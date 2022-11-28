import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=apis", elemType: Api })
  apis?: Api[];

  @SpeakeasyMetadata({ data: "json, name=authentication" })
  authentication?: Authentication;

  @SpeakeasyMetadata({ data: "json, name=documentation" })
  documentation?: Documentation;

  @SpeakeasyMetadata({ data: "json, name=endpoints", elemType: Endpoint })
  endpoints?: Endpoint[];

  @SpeakeasyMetadata({ data: "json, name=monitoredResources", elemType: MonitoredResourceDescriptor })
  monitoredResources?: MonitoredResourceDescriptor[];

  @SpeakeasyMetadata({ data: "json, name=monitoring" })
  monitoring?: Monitoring;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=quota" })
  quota?: Quota;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage?: Usage;
}
