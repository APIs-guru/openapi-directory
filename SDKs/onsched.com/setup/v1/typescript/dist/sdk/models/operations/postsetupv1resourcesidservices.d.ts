import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1ResourcesIdServicesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostSetupV1ResourcesIdServicesRequests extends SpeakeasyBase {
    strings?: string[];
    strings1?: string[];
    strings2?: string[];
    strings3?: string[];
}
export declare class PostSetupV1ResourcesIdServicesRequest extends SpeakeasyBase {
    pathParams: PostSetupV1ResourcesIdServicesPathParams;
    request?: PostSetupV1ResourcesIdServicesRequests;
}
export declare class PostSetupV1ResourcesIdServicesResponse extends SpeakeasyBase {
    contentType: string;
    resourceViewModel?: shared.ResourceViewModel;
    statusCode: number;
}
