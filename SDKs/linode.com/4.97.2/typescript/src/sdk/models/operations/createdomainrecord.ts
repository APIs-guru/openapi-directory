import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateDomainRecordPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainId" })
  domainId: number;
}

export enum CreateDomainRecordRequestBodyTagEnum {
    Issue = "issue",
    Issuewild = "issuewild",
    Iodef = "iodef"
}

export enum CreateDomainRecordRequestBodyTypeEnum {
    A = "A",
    Aaaa = "AAAA",
    Ns = "NS",
    Mx = "MX",
    Cname = "CNAME",
    Txt = "TXT",
    Srv = "SRV",
    Ptr = "PTR",
    Caa = "CAA"
}


export class CreateDomainRecordRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: CreateDomainRecordRequestBodyTagEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl_sec" })
  ttlSec?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CreateDomainRecordRequestBodyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}


export class CreateDomainRecordSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CreateDomainRecordDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateDomainRecordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateDomainRecordPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateDomainRecordRequestBodyInput;

  @SpeakeasyMetadata()
  security: CreateDomainRecordSecurity;
}


export class CreateDomainRecordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  domainRecord?: shared.DomainRecord;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createDomainRecordDefaultApplicationJsonObject?: CreateDomainRecordDefaultApplicationJson;
}
