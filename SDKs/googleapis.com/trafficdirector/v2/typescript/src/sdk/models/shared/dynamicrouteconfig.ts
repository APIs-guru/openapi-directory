import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DynamicRouteConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastUpdated" })
  lastUpdated?: string;

  @Metadata({ data: "json, name=routeConfig" })
  routeConfig?: Map<string, any>;

  @Metadata({ data: "json, name=versionInfo" })
  versionInfo?: string;
}
