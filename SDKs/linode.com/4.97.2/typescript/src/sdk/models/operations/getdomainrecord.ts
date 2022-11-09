import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDomainRecordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainId" })
  domainId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=recordId" })
  recordId: number;
}


export class GetDomainRecordSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetDomainRecordSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetDomainRecordSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetDomainRecordSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetDomainRecordSecurityOption2;
}


export class GetDomainRecordRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDomainRecordPathParams;

  @Metadata()
  security: GetDomainRecordSecurity;
}


export class GetDomainRecordDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetDomainRecordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  domainRecord?: shared.DomainRecord;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDomainRecordDefaultApplicationJsonObject?: GetDomainRecordDefaultApplicationJson;
}
