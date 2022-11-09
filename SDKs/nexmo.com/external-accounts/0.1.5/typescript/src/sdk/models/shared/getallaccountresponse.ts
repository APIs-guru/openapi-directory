import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAllAccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=api_key" })
  apiKey: string;

  @Metadata({ data: "json, name=applications" })
  applications?: string[];

  @Metadata({ data: "json, name=external_id" })
  externalId: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=provider" })
  provider: string;
}
