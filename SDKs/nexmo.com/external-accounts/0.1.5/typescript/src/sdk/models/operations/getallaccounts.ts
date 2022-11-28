import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetAllAccountsProviderEnum {
    Messenger = "messenger",
    ViberServiceMsg = "viber_service_msg",
    Whatsapp = "whatsapp"
}


export class GetAllAccountsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_number" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: GetAllAccountsProviderEnum;
}


export class GetAllAccountsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth?: shared.SchemeBearerAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth?: shared.SchemeBasicAuth;
}


export class GetAllAccounts200ApplicationJsonLinksFirst extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class GetAllAccounts200ApplicationJsonLinksLast extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class GetAllAccounts200ApplicationJsonLinksNext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class GetAllAccounts200ApplicationJsonLinksPrev extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class GetAllAccounts200ApplicationJsonLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class GetAllAccounts200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: GetAllAccounts200ApplicationJsonLinksFirst;

  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: GetAllAccounts200ApplicationJsonLinksLast;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: GetAllAccounts200ApplicationJsonLinksNext;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: GetAllAccounts200ApplicationJsonLinksPrev;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: GetAllAccounts200ApplicationJsonLinksSelf;
}


export class GetAllAccounts200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded", elemType: shared.GetAllAccountResponse })
  embedded?: shared.GetAllAccountResponse[];

  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: GetAllAccounts200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=page_number" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;
}


export class GetAllAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAllAccountsQueryParams;

  @SpeakeasyMetadata()
  security: GetAllAccountsSecurity;
}


export class GetAllAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAllAccounts200ApplicationJsonObject?: GetAllAccounts200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
