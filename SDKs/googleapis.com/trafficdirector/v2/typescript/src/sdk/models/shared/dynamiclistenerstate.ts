import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DynamicListenerState extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastUpdated" })
  lastUpdated?: string;

  @Metadata({ data: "json, name=listener" })
  listener?: Map<string, any>;

  @Metadata({ data: "json, name=versionInfo" })
  versionInfo?: string;
}
