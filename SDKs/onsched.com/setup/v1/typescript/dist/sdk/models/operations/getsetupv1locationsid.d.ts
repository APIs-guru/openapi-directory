import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1LocationsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1LocationsIdRequest extends SpeakeasyBase {
    pathParams: GetSetupV1LocationsIdPathParams;
}
export declare class GetSetupV1LocationsIdResponse extends SpeakeasyBase {
    contentType: string;
    locationViewModel?: shared.LocationViewModel;
    statusCode: number;
}
