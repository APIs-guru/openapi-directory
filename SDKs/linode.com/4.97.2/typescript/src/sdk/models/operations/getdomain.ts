import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDomainPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainId" })
  domainId: number;
}


export class GetDomainSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetDomainDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDomainPathParams;

  @SpeakeasyMetadata()
  security: GetDomainSecurity;
}


export class GetDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  domain?: shared.Domain;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDomainDefaultApplicationJsonObject?: GetDomainDefaultApplicationJson;
}
