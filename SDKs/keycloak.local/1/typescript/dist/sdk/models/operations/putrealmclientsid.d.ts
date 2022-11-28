import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRealmClientsIdPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PutRealmClientsIdRequest extends SpeakeasyBase {
    pathParams: PutRealmClientsIdPathParams;
    request: shared.ClientRepresentation;
}
export declare class PutRealmClientsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
