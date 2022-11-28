import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSetupV1CalendarsQueryParams extends SpeakeasyBase {
    deleted?: boolean;
    limit?: number;
    locationId?: string;
    offset?: number;
}
export declare class GetSetupV1CalendarsRequest extends SpeakeasyBase {
    queryParams: GetSetupV1CalendarsQueryParams;
}
export declare class GetSetupV1CalendarsResponse extends SpeakeasyBase {
    contentType: string;
    scheduleListViewModel?: Map<string, any>;
    statusCode: number;
}
