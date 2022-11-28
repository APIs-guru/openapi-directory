import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DynamicScopedRouteConfigs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=scopedRouteConfigs" })
  scopedRouteConfigs?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=versionInfo" })
  versionInfo?: string;
}
