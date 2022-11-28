import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FindAllGlobalAuthModulesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class FindAllGlobalAuthModulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: FindAllGlobalAuthModulesSecurity;
}


export class FindAllGlobalAuthModulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  findAllGlobalAuthModules200ApplicationJsonOneoves?: any[];
}
