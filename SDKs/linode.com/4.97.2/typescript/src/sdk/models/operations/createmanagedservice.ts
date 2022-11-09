import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateManagedServiceRequestBodyServiceTypeEnum {
    Url = "url"
,    Tcp = "tcp"
}

export enum CreateManagedServiceRequestBodyStatusEnum {
    Disabled = "disabled"
,    Pending = "pending"
,    Ok = "ok"
,    Problem = "problem"
}


export class CreateManagedServiceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address: string;

  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=consultation_group" })
  consultationGroup?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=credentials" })
  credentials?: number[];

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=service_type" })
  serviceType: CreateManagedServiceRequestBodyServiceTypeEnum;

  @Metadata({ data: "json, name=status" })
  status?: CreateManagedServiceRequestBodyStatusEnum;

  @Metadata({ data: "json, name=timeout" })
  timeout: number;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}


export class CreateManagedServiceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateManagedServiceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateManagedServiceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateManagedServiceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateManagedServiceSecurityOption2;
}


export class CreateManagedServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateManagedServiceRequestBody;

  @Metadata()
  security: CreateManagedServiceSecurity;
}


export class CreateManagedServiceDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateManagedServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  managedService?: shared.ManagedService;

  @Metadata()
  statusCode: number;

  @Metadata()
  createManagedServiceDefaultApplicationJsonObject?: CreateManagedServiceDefaultApplicationJson;
}
