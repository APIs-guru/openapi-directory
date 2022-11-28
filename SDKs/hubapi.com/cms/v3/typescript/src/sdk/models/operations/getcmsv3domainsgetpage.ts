import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCmsV3DomainsGetPageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAfter" })
  createdAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdBefore" })
  createdBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAfter" })
  updatedAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedBefore" })
  updatedBefore?: Date;
}


export class GetCmsV3DomainsGetPageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class GetCmsV3DomainsGetPageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCmsV3DomainsGetPageQueryParams;

  @SpeakeasyMetadata()
  security: GetCmsV3DomainsGetPageSecurity;
}


export class GetCmsV3DomainsGetPageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  collectionResponseWithTotalDomainForwardPaging?: shared.CollectionResponseWithTotalDomainForwardPaging;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
