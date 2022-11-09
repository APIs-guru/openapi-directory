import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AllApiKeysSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class AllApiKeysRequest extends SpeakeasyBase {
  @Metadata()
  security: AllApiKeysSecurity;
}


export class AllApiKeysResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ApiKey })
  apiKeys?: shared.ApiKey[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
