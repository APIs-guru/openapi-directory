import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSetupV1LocationsIdServicesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSetupV1LocationsIdServicesRequest extends SpeakeasyBase {
    pathParams: DeleteSetupV1LocationsIdServicesPathParams;
}
export declare class DeleteSetupV1LocationsIdServicesResponse extends SpeakeasyBase {
    contentType: string;
    locationViewModel?: shared.LocationViewModel;
    statusCode: number;
}
