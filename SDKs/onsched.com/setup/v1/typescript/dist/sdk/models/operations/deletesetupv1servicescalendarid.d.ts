import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSetupV1ServicesCalendarIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSetupV1ServicesCalendarIdRequest extends SpeakeasyBase {
    pathParams: DeleteSetupV1ServicesCalendarIdPathParams;
}
export declare class DeleteSetupV1ServicesCalendarIdResponse extends SpeakeasyBase {
    contentType: string;
    serviceCalendarViewModel?: shared.ServiceCalendarViewModel;
    statusCode: number;
}
