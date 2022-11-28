import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1LocationsIdServicesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostSetupV1LocationsIdServicesRequests extends SpeakeasyBase {
    strings?: string[];
    strings1?: string[];
    strings2?: string[];
    strings3?: string[];
}
export declare class PostSetupV1LocationsIdServicesRequest extends SpeakeasyBase {
    pathParams: PostSetupV1LocationsIdServicesPathParams;
    request?: PostSetupV1LocationsIdServicesRequests;
}
export declare class PostSetupV1LocationsIdServicesResponse extends SpeakeasyBase {
    contentType: string;
    locationViewModel?: shared.LocationViewModel;
    statusCode: number;
}
