import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateDomainRequestBodyStatusEnum {
    Disabled = "disabled",
    Active = "active"
}

export enum CreateDomainRequestBodyTypeEnum {
    Master = "master",
    Slave = "slave"
}


export class CreateDomainRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=axfr_ips" })
  axfrIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=expire_sec" })
  expireSec?: number;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=master_ips" })
  masterIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=refresh_sec" })
  refreshSec?: number;

  @SpeakeasyMetadata({ data: "json, name=retry_sec" })
  retrySec?: number;

  @SpeakeasyMetadata({ data: "json, name=soa_email" })
  soaEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CreateDomainRequestBodyStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=ttl_sec" })
  ttlSec?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CreateDomainRequestBodyTypeEnum;
}


export class CreateDomainSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CreateDomainDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateDomainRequestBodyInput;

  @SpeakeasyMetadata()
  security: CreateDomainSecurity;
}


export class CreateDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  domain?: shared.Domain;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createDomainDefaultApplicationJsonObject?: CreateDomainDefaultApplicationJson;
}
