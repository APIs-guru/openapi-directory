import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDomainRecordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainId" })
  domainId: number;
}

export enum CreateDomainRecordRequestBodyTagEnum {
    Issue = "issue"
,    Issuewild = "issuewild"
,    Iodef = "iodef"
}

export enum CreateDomainRecordRequestBodyTypeEnum {
    A = "A"
,    Aaaa = "AAAA"
,    Ns = "NS"
,    Mx = "MX"
,    Cname = "CNAME"
,    Txt = "TXT"
,    Srv = "SRV"
,    Ptr = "PTR"
,    Caa = "CAA"
}


export class CreateDomainRecordRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=priority" })
  priority?: number;

  @Metadata({ data: "json, name=protocol" })
  protocol?: string;

  @Metadata({ data: "json, name=service" })
  service?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: CreateDomainRecordRequestBodyTagEnum;

  @Metadata({ data: "json, name=target" })
  target?: string;

  @Metadata({ data: "json, name=ttl_sec" })
  ttlSec?: number;

  @Metadata({ data: "json, name=type" })
  type: CreateDomainRecordRequestBodyTypeEnum;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;

  @Metadata({ data: "json, name=weight" })
  weight?: number;
}


export class CreateDomainRecordSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateDomainRecordSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateDomainRecordSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateDomainRecordSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateDomainRecordSecurityOption2;
}


export class CreateDomainRecordRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateDomainRecordPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateDomainRecordRequestBody;

  @Metadata()
  security: CreateDomainRecordSecurity;
}


export class CreateDomainRecordDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateDomainRecordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  domainRecord?: shared.DomainRecord;

  @Metadata()
  statusCode: number;

  @Metadata()
  createDomainRecordDefaultApplicationJsonObject?: CreateDomainRecordDefaultApplicationJson;
}
