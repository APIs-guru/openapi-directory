import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDomainZonePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainId" })
  domainId: string;
}


export class GetDomainZoneSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetDomainZoneDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetDomainZoneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDomainZonePathParams;

  @SpeakeasyMetadata()
  security: GetDomainZoneSecurity;
}


export class GetDomainZoneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDomainZone200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getDomainZoneDefaultApplicationJsonObject?: GetDomainZoneDefaultApplicationJson;
}
