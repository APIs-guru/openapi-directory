import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEntityTransfersQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetEntityTransfersSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetEntityTransfers200ApplicationJson extends SpeakeasyBase {
    data?: shared.EntityTransfer[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetEntityTransfersDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetEntityTransfersRequest extends SpeakeasyBase {
    queryParams: GetEntityTransfersQueryParams;
    security: GetEntityTransfersSecurity;
}
export declare class GetEntityTransfersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getEntityTransfers200ApplicationJsonObject?: GetEntityTransfers200ApplicationJson;
    getEntityTransfersDefaultApplicationJsonObject?: GetEntityTransfersDefaultApplicationJson;
}
