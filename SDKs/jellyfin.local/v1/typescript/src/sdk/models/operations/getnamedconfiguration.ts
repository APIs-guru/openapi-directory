import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNamedConfigurationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class GetNamedConfigurationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetNamedConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNamedConfigurationPathParams;

  @Metadata()
  security: GetNamedConfigurationSecurity;
}


export class GetNamedConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getNamedConfiguration200ApplicationJsonBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
