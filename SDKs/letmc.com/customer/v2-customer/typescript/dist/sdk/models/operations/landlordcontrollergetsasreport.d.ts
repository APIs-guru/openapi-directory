import { SpeakeasyBase } from "../../../internal/utils";
export declare class LandlordControllerGetSasReportPathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class LandlordControllerGetSasReportQueryParams extends SpeakeasyBase {
    token: string;
    yearEnd: number;
}
export declare class LandlordControllerGetSasReportRequest extends SpeakeasyBase {
    pathParams: LandlordControllerGetSasReportPathParams;
    queryParams: LandlordControllerGetSasReportQueryParams;
}
export declare class LandlordControllerGetSasReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    object?: Map<string, any>;
    statusCode: number;
}
