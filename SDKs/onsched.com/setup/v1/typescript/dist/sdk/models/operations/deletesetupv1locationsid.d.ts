import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSetupV1LocationsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSetupV1LocationsIdRequest extends SpeakeasyBase {
    pathParams: DeleteSetupV1LocationsIdPathParams;
}
export declare class DeleteSetupV1LocationsIdResponse extends SpeakeasyBase {
    contentType: string;
    locationViewModel?: shared.LocationViewModel;
    statusCode: number;
}
