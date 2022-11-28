import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnableManagedServicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: number;
}


export class EnableManagedServiceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class EnableManagedServiceDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class EnableManagedServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnableManagedServicePathParams;

  @SpeakeasyMetadata()
  security: EnableManagedServiceSecurity;
}


export class EnableManagedServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  managedService?: shared.ManagedService;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  enableManagedServiceDefaultApplicationJsonObject?: EnableManagedServiceDefaultApplicationJson;
}
