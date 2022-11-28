import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1ResourcesIdBlockPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostSetupV1ResourcesIdBlockRequests extends SpeakeasyBase {
    resourceBlockInputModel?: shared.ResourceBlockInputModel;
    resourceBlockInputModel1?: shared.ResourceBlockInputModel;
    resourceBlockInputModel2?: shared.ResourceBlockInputModel;
    resourceBlockInputModel3?: shared.ResourceBlockInputModel;
}
export declare class PostSetupV1ResourcesIdBlockRequest extends SpeakeasyBase {
    pathParams: PostSetupV1ResourcesIdBlockPathParams;
    request?: PostSetupV1ResourcesIdBlockRequests;
}
export declare class PostSetupV1ResourcesIdBlockResponse extends SpeakeasyBase {
    contentType: string;
    resourceBlockViewModel?: shared.ResourceBlockViewModel;
    statusCode: number;
}
