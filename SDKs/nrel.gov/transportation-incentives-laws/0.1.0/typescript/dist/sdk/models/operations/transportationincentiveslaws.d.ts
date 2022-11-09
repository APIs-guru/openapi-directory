import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum TransportationIncentivesLawsOutputFormatEnum {
    Json = "json",
    Xml = "xml",
    Csv = "csv"
}
export declare class TransportationIncentivesLawsPathParams extends SpeakeasyBase {
    outputFormat: TransportationIncentivesLawsOutputFormatEnum;
}
export declare class TransportationIncentivesLawsQueryParams extends SpeakeasyBase {
    apiKey: string;
    expired?: boolean;
    incentiveType?: string;
    jurisdiction?: string;
    keyword?: string;
    lawType?: string;
    limit?: number;
    local?: boolean;
    poc?: boolean;
    recent?: boolean;
    regulationType?: string;
    technology?: string;
    userType?: string;
}
export declare class TransportationIncentivesLawsRequest extends SpeakeasyBase {
    pathParams: TransportationIncentivesLawsPathParams;
    queryParams: TransportationIncentivesLawsQueryParams;
}
export declare class TransportationIncentivesLawsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
