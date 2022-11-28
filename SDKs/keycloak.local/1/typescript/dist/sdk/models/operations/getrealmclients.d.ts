import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmClientsQueryParams extends SpeakeasyBase {
    clientId?: string;
    first?: number;
    max?: number;
    search?: boolean;
    viewableOnly?: boolean;
}
export declare class GetRealmClientsRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsPathParams;
    queryParams: GetRealmClientsQueryParams;
}
export declare class GetRealmClientsResponse extends SpeakeasyBase {
    clientRepresentations?: shared.ClientRepresentation[];
    contentType: string;
    statusCode: number;
}
