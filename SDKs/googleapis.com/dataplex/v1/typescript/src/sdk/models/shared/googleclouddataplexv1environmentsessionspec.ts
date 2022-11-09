import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GoogleCloudDataplexV1EnvironmentSessionSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableFastStartup" })
  enableFastStartup?: boolean;

  @Metadata({ data: "json, name=maxIdleDuration" })
  maxIdleDuration?: string;
}
