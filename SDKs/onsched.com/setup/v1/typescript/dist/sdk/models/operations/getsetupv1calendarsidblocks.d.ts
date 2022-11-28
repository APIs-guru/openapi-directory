import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSetupV1CalendarsIdBlocksPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1CalendarsIdBlocksQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class GetSetupV1CalendarsIdBlocksRequest extends SpeakeasyBase {
    pathParams: GetSetupV1CalendarsIdBlocksPathParams;
    queryParams: GetSetupV1CalendarsIdBlocksQueryParams;
}
export declare class GetSetupV1CalendarsIdBlocksResponse extends SpeakeasyBase {
    calendarBlockListViewModel?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
