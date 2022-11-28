import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StaticRouteConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=routeConfig" })
  routeConfig?: Map<string, any>;
}
