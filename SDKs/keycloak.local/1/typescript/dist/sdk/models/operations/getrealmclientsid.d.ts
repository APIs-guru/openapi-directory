import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmClientsIdRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdPathParams;
}
export declare class GetRealmClientsIdResponse extends SpeakeasyBase {
    clientRepresentation?: shared.ClientRepresentation;
    contentType: string;
    statusCode: number;
}
