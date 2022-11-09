import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateNamedConfigurationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class UpdateNamedConfigurationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateNamedConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNamedConfigurationPathParams;

  @Metadata()
  security: UpdateNamedConfigurationSecurity;
}


export class UpdateNamedConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
