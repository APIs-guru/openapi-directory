import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetAllAccountsProviderEnum {
    Messenger = "messenger"
,    ViberServiceMsg = "viber_service_msg"
,    Whatsapp = "whatsapp"
}


export class GetAllAccountsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page_number" })
  pageNumber?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: GetAllAccountsProviderEnum;
}


export class GetAllAccountsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAllAccountsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetAllAccountsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetAllAccountsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetAllAccountsSecurityOption2;
}


export class GetAllAccountsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAllAccountsQueryParams;

  @Metadata()
  security: GetAllAccountsSecurity;
}


export class GetAllAccounts200ApplicationJsonLinksFirst extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}


export class GetAllAccounts200ApplicationJsonLinksLast extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}


export class GetAllAccounts200ApplicationJsonLinksNext extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}


export class GetAllAccounts200ApplicationJsonLinksPrev extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}


export class GetAllAccounts200ApplicationJsonLinksSelf extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}


export class GetAllAccounts200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: GetAllAccounts200ApplicationJsonLinksFirst;

  @Metadata({ data: "json, name=last" })
  last?: GetAllAccounts200ApplicationJsonLinksLast;

  @Metadata({ data: "json, name=next" })
  next?: GetAllAccounts200ApplicationJsonLinksNext;

  @Metadata({ data: "json, name=prev" })
  prev?: GetAllAccounts200ApplicationJsonLinksPrev;

  @Metadata({ data: "json, name=self" })
  self?: GetAllAccounts200ApplicationJsonLinksSelf;
}


export class GetAllAccounts200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded", elemType: shared.GetAllAccountResponse })
  embedded?: shared.GetAllAccountResponse[];

  @Metadata({ data: "json, name=_links" })
  links?: GetAllAccounts200ApplicationJsonLinks;

  @Metadata({ data: "json, name=page_number" })
  pageNumber?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;
}


export class GetAllAccountsResponse extends SpeakeasyBase {
  @Metadata()
  fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  getAllAccounts200ApplicationJsonObject?: GetAllAccounts200ApplicationJson;

  @Metadata()
  statusCode: number;
}
