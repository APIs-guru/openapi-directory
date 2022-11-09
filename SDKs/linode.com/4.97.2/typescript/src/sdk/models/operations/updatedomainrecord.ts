import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDomainRecordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainId" })
  domainId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=recordId" })
  recordId: number;
}


export class UpdateDomainRecordSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateDomainRecordSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateDomainRecordSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateDomainRecordSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateDomainRecordSecurityOption2;
}


export class UpdateDomainRecordRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDomainRecordPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DomainRecord;

  @Metadata()
  security: UpdateDomainRecordSecurity;
}


export class UpdateDomainRecordDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateDomainRecordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  domainRecord?: shared.DomainRecord;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDomainRecordDefaultApplicationJsonObject?: UpdateDomainRecordDefaultApplicationJson;
}
