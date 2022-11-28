import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateManagedServiceRequestBodyServiceTypeEnum {
    Url = "url",
    Tcp = "tcp"
}


export class CreateManagedServiceRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address: string;

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=consultation_group" })
  consultationGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=credentials" })
  credentials?: number[];

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=service_type" })
  serviceType: CreateManagedServiceRequestBodyServiceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout: number;
}


export class CreateManagedServiceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CreateManagedServiceDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateManagedServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateManagedServiceRequestBodyInput;

  @SpeakeasyMetadata()
  security: CreateManagedServiceSecurity;
}


export class CreateManagedServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  managedService?: shared.ManagedService;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createManagedServiceDefaultApplicationJsonObject?: CreateManagedServiceDefaultApplicationJson;
}
