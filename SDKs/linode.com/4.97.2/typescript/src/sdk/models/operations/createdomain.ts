import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateDomainRequestBodyStatusEnum {
    Disabled = "disabled"
,    Active = "active"
}

export enum CreateDomainRequestBodyTypeEnum {
    Master = "master"
,    Slave = "slave"
}


export class CreateDomainRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=axfr_ips" })
  axfrIps?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=expire_sec" })
  expireSec?: number;

  @Metadata({ data: "json, name=group" })
  group?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=master_ips" })
  masterIps?: string[];

  @Metadata({ data: "json, name=refresh_sec" })
  refreshSec?: number;

  @Metadata({ data: "json, name=retry_sec" })
  retrySec?: number;

  @Metadata({ data: "json, name=soa_email" })
  soaEmail?: string;

  @Metadata({ data: "json, name=status" })
  status?: CreateDomainRequestBodyStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=ttl_sec" })
  ttlSec?: number;

  @Metadata({ data: "json, name=type" })
  type: CreateDomainRequestBodyTypeEnum;
}


export class CreateDomainSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateDomainSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateDomainSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateDomainSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateDomainSecurityOption2;
}


export class CreateDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: CreateDomainRequestBody;

  @Metadata()
  security: CreateDomainSecurity;
}


export class CreateDomainDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateDomainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  domain?: shared.Domain;

  @Metadata()
  statusCode: number;

  @Metadata()
  createDomainDefaultApplicationJsonObject?: CreateDomainDefaultApplicationJson;
}
