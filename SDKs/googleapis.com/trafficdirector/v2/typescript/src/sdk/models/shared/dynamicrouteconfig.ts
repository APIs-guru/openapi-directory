import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DynamicRouteConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=routeConfig" })
  routeConfig?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=versionInfo" })
  versionInfo?: string;
}
