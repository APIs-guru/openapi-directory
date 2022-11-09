import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCmsV3DomainsDomainIdGetByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainId" })
  domainId: string;
}


export class GetCmsV3DomainsDomainIdGetByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=archived" })
  archived?: boolean;
}


export class GetCmsV3DomainsDomainIdGetByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class GetCmsV3DomainsDomainIdGetByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCmsV3DomainsDomainIdGetByIdPathParams;

  @Metadata()
  queryParams: GetCmsV3DomainsDomainIdGetByIdQueryParams;

  @Metadata()
  security: GetCmsV3DomainsDomainIdGetByIdSecurity;
}


export class GetCmsV3DomainsDomainIdGetByIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  domain?: shared.Domain;

  @Metadata()
  statusCode: number;
}
