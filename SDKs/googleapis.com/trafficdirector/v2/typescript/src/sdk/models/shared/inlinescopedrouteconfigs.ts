import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InlineScopedRouteConfigs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=scopedRouteConfigs" })
  scopedRouteConfigs?: Map<string, any>[];
}
