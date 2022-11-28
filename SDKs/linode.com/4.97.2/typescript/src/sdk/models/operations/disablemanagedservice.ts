import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DisableManagedServicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: number;
}


export class DisableManagedServiceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DisableManagedServiceDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DisableManagedServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DisableManagedServicePathParams;

  @SpeakeasyMetadata()
  security: DisableManagedServiceSecurity;
}


export class DisableManagedServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  managedService?: shared.ManagedService;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  disableManagedServiceDefaultApplicationJsonObject?: DisableManagedServiceDefaultApplicationJson;
}
