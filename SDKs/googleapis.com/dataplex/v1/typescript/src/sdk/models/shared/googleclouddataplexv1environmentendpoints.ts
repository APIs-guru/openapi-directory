import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GoogleCloudDataplexV1EnvironmentEndpoints extends SpeakeasyBase {
  @Metadata({ data: "json, name=notebooks" })
  notebooks?: string;

  @Metadata({ data: "json, name=sql" })
  sql?: string;
}
