import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FindGlobalAuthModuleByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class FindGlobalAuthModuleByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class FindGlobalAuthModuleByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FindGlobalAuthModuleByIdPathParams;

  @SpeakeasyMetadata()
  security: FindGlobalAuthModuleByIdSecurity;
}


export class FindGlobalAuthModuleByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  findGlobalAuthModuleById200ApplicationJsonOneOf?: any;
}
