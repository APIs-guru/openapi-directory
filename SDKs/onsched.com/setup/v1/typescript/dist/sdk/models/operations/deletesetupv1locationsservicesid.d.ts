import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSetupV1LocationsServicesIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSetupV1LocationsServicesIdRequest extends SpeakeasyBase {
    pathParams: DeleteSetupV1LocationsServicesIdPathParams;
}
export declare class DeleteSetupV1LocationsServicesIdResponse extends SpeakeasyBase {
    contentType: string;
    locationViewModel?: shared.LocationViewModel;
    statusCode: number;
}
