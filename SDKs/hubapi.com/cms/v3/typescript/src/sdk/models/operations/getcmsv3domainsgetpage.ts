import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCmsV3DomainsGetPageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=archived" })
  archived?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdAfter" })
  createdAfter?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdAt" })
  createdAt?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdBefore" })
  createdBefore?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=properties" })
  properties?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=updatedAfter" })
  updatedAfter?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updatedAt" })
  updatedAt?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updatedBefore" })
  updatedBefore?: number;
}


export class GetCmsV3DomainsGetPageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class GetCmsV3DomainsGetPageRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCmsV3DomainsGetPageQueryParams;

  @Metadata()
  security: GetCmsV3DomainsGetPageSecurity;
}


export class GetCmsV3DomainsGetPageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  collectionResponseWithTotalDomain?: shared.CollectionResponseWithTotalDomain;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
