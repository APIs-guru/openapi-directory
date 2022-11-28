import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSetupV1CalendarsIdServicesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1CalendarsIdServicesQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class GetSetupV1CalendarsIdServicesRequest extends SpeakeasyBase {
    pathParams: GetSetupV1CalendarsIdServicesPathParams;
    queryParams: GetSetupV1CalendarsIdServicesQueryParams;
}
export declare class GetSetupV1CalendarsIdServicesResponse extends SpeakeasyBase {
    contentType: string;
    serviceListViewModel?: Map<string, any>;
    statusCode: number;
}
