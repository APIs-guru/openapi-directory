import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateDomainPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainId" })
  domainId: number;
}


export class UpdateDomainSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class UpdateDomainDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDomainPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DomainInput;

  @SpeakeasyMetadata()
  security: UpdateDomainSecurity;
}


export class UpdateDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  domain?: shared.Domain;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateDomainDefaultApplicationJsonObject?: UpdateDomainDefaultApplicationJson;
}
