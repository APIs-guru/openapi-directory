import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDomainRecordPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainId" })
  domainId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recordId" })
  recordId: number;
}


export class GetDomainRecordSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetDomainRecordDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetDomainRecordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDomainRecordPathParams;

  @SpeakeasyMetadata()
  security: GetDomainRecordSecurity;
}


export class GetDomainRecordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  domainRecord?: shared.DomainRecord;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDomainRecordDefaultApplicationJsonObject?: GetDomainRecordDefaultApplicationJson;
}
