import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FindAllGlobalAuthModulesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class FindAllGlobalAuthModulesRequest extends SpeakeasyBase {
  @Metadata()
  security: FindAllGlobalAuthModulesSecurity;
}


export class FindAllGlobalAuthModulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  findAllGlobalAuthModules200ApplicationJsonOneoves?: any[];
}
