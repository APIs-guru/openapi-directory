import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DynamicScopedRouteConfigs extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastUpdated" })
  lastUpdated?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=scopedRouteConfigs" })
  scopedRouteConfigs?: Map<string, any>[];

  @Metadata({ data: "json, name=versionInfo" })
  versionInfo?: string;
}
