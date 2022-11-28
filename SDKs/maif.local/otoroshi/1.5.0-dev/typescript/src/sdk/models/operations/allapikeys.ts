import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AllApiKeysSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class AllApiKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: AllApiKeysSecurity;
}


export class AllApiKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ApiKey })
  apiKeys?: shared.ApiKey[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
