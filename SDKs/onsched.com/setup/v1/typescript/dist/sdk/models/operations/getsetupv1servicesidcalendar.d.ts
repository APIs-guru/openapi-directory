import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1ServicesIdCalendarPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1ServicesIdCalendarQueryParams extends SpeakeasyBase {
    locationId?: string;
}
export declare class GetSetupV1ServicesIdCalendarRequest extends SpeakeasyBase {
    pathParams: GetSetupV1ServicesIdCalendarPathParams;
    queryParams: GetSetupV1ServicesIdCalendarQueryParams;
}
export declare class GetSetupV1ServicesIdCalendarResponse extends SpeakeasyBase {
    contentType: string;
    serviceCalendarViewModel?: shared.ServiceCalendarViewModel;
    statusCode: number;
}
