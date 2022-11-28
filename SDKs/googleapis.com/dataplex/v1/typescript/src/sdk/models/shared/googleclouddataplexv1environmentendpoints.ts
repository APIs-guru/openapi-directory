import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GoogleCloudDataplexV1EnvironmentEndpoints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notebooks" })
  notebooks?: string;

  @SpeakeasyMetadata({ data: "json, name=sql" })
  sql?: string;
}
