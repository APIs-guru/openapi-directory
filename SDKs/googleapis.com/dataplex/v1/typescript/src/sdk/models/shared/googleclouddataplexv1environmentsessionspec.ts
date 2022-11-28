import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GoogleCloudDataplexV1EnvironmentSessionSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableFastStartup" })
  enableFastStartup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxIdleDuration" })
  maxIdleDuration?: string;
}
