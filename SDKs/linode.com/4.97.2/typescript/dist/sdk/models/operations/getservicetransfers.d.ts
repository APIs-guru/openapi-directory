import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetServiceTransfersQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetServiceTransfersSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetServiceTransfers200ApplicationJson extends SpeakeasyBase {
    data?: shared.ServiceTransfer[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetServiceTransfersDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetServiceTransfersRequest extends SpeakeasyBase {
    queryParams: GetServiceTransfersQueryParams;
    security: GetServiceTransfersSecurity;
}
export declare class GetServiceTransfersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getServiceTransfers200ApplicationJsonObject?: GetServiceTransfers200ApplicationJson;
    getServiceTransfersDefaultApplicationJsonObject?: GetServiceTransfersDefaultApplicationJson;
}
