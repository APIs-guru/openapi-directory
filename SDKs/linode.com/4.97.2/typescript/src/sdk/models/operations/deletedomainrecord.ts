import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteDomainRecordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainId" })
  domainId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=recordId" })
  recordId: number;
}


export class DeleteDomainRecordSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteDomainRecordSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteDomainRecordSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteDomainRecordSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteDomainRecordSecurityOption2;
}


export class DeleteDomainRecordRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDomainRecordPathParams;

  @Metadata()
  security: DeleteDomainRecordSecurity;
}


export class DeleteDomainRecordDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteDomainRecordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteDomainRecord200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteDomainRecordDefaultApplicationJsonObject?: DeleteDomainRecordDefaultApplicationJson;
}
