import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsInitialAccessPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmClientsInitialAccessRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsInitialAccessPathParams;
}
export declare class GetRealmClientsInitialAccessResponse extends SpeakeasyBase {
    clientInitialAccessPresentations?: shared.ClientInitialAccessPresentation[];
    contentType: string;
    statusCode: number;
}
