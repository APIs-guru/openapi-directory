import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateManagedServicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: number;
}


export class UpdateManagedServiceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class UpdateManagedServiceDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateManagedServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateManagedServicePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ManagedServiceInput;

  @SpeakeasyMetadata()
  security: UpdateManagedServiceSecurity;
}


export class UpdateManagedServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  managedService?: shared.ManagedService;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateManagedServiceDefaultApplicationJsonObject?: UpdateManagedServiceDefaultApplicationJson;
}
