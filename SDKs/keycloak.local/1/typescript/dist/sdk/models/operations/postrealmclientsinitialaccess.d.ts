import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmClientsInitialAccessPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class PostRealmClientsInitialAccessRequest extends SpeakeasyBase {
    pathParams: PostRealmClientsInitialAccessPathParams;
    request: shared.ClientInitialAccessCreatePresentation;
}
export declare class PostRealmClientsInitialAccessResponse extends SpeakeasyBase {
    clientInitialAccessPresentation?: shared.ClientInitialAccessPresentation;
    contentType: string;
    statusCode: number;
}
