import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateDomainRecordPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainId" })
  domainId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recordId" })
  recordId: number;
}


export class UpdateDomainRecordSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class UpdateDomainRecordDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateDomainRecordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDomainRecordPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DomainRecordInput;

  @SpeakeasyMetadata()
  security: UpdateDomainRecordSecurity;
}


export class UpdateDomainRecordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  domainRecord?: shared.DomainRecord;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateDomainRecordDefaultApplicationJsonObject?: UpdateDomainRecordDefaultApplicationJson;
}
