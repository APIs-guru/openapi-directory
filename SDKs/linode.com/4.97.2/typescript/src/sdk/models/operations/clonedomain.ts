import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CloneDomainPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainId" })
  domainId: string;
}


export class CloneDomainRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;
}


export class CloneDomainSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CloneDomainDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CloneDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloneDomainPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CloneDomainRequestBody;

  @SpeakeasyMetadata()
  security: CloneDomainSecurity;
}


export class CloneDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  domain?: shared.Domain;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cloneDomainDefaultApplicationJsonObject?: CloneDomainDefaultApplicationJson;
}
