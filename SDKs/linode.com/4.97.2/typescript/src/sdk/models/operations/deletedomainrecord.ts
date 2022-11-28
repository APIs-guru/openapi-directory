import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteDomainRecordPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainId" })
  domainId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recordId" })
  recordId: number;
}


export class DeleteDomainRecordSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DeleteDomainRecordDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteDomainRecordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDomainRecordPathParams;

  @SpeakeasyMetadata()
  security: DeleteDomainRecordSecurity;
}


export class DeleteDomainRecordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteDomainRecord200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  deleteDomainRecordDefaultApplicationJsonObject?: DeleteDomainRecordDefaultApplicationJson;
}
