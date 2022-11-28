import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSetupV1LocationsIdDeleteimagePathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSetupV1LocationsIdDeleteimageRequest extends SpeakeasyBase {
    pathParams: DeleteSetupV1LocationsIdDeleteimagePathParams;
}
export declare class DeleteSetupV1LocationsIdDeleteimageResponse extends SpeakeasyBase {
    contentType: string;
    locationViewModel?: shared.LocationViewModel;
    statusCode: number;
}
