import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCmsV3DomainsDomainIdGetByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainId" })
  domainId: string;
}


export class GetCmsV3DomainsDomainIdGetByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class GetCmsV3DomainsDomainIdGetByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCmsV3DomainsDomainIdGetByIdPathParams;

  @SpeakeasyMetadata()
  security: GetCmsV3DomainsDomainIdGetByIdSecurity;
}


export class GetCmsV3DomainsDomainIdGetByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  domain?: shared.Domain;

  @SpeakeasyMetadata()
  statusCode: number;
}
