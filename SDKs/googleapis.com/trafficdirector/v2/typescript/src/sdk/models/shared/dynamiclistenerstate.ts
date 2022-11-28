import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DynamicListenerState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=listener" })
  listener?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=versionInfo" })
  versionInfo?: string;
}
