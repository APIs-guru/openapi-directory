import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAllAccountsProviderEnum {
    Messenger = "messenger",
    ViberServiceMsg = "viber_service_msg",
    Whatsapp = "whatsapp"
}
export declare class GetAllAccountsQueryParams extends SpeakeasyBase {
    pageNumber?: number;
    pageSize?: number;
    provider?: GetAllAccountsProviderEnum;
}
export declare class GetAllAccountsSecurity extends SpeakeasyBase {
    bearerAuth?: shared.SchemeBearerAuth;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetAllAccounts200ApplicationJsonLinksFirst extends SpeakeasyBase {
    href?: string;
}
export declare class GetAllAccounts200ApplicationJsonLinksLast extends SpeakeasyBase {
    href?: string;
}
export declare class GetAllAccounts200ApplicationJsonLinksNext extends SpeakeasyBase {
    href?: string;
}
export declare class GetAllAccounts200ApplicationJsonLinksPrev extends SpeakeasyBase {
    href?: string;
}
export declare class GetAllAccounts200ApplicationJsonLinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetAllAccounts200ApplicationJsonLinks extends SpeakeasyBase {
    first?: GetAllAccounts200ApplicationJsonLinksFirst;
    last?: GetAllAccounts200ApplicationJsonLinksLast;
    next?: GetAllAccounts200ApplicationJsonLinksNext;
    prev?: GetAllAccounts200ApplicationJsonLinksPrev;
    self?: GetAllAccounts200ApplicationJsonLinksSelf;
}
export declare class GetAllAccounts200ApplicationJson extends SpeakeasyBase {
    embedded?: shared.GetAllAccountResponse[];
    links?: GetAllAccounts200ApplicationJsonLinks;
    pageNumber?: number;
    pageSize?: number;
}
export declare class GetAllAccountsRequest extends SpeakeasyBase {
    queryParams: GetAllAccountsQueryParams;
    security: GetAllAccountsSecurity;
}
export declare class GetAllAccountsResponse extends SpeakeasyBase {
    fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;
    contentType: string;
    getAllAccounts200ApplicationJsonObject?: GetAllAccounts200ApplicationJson;
    statusCode: number;
}
