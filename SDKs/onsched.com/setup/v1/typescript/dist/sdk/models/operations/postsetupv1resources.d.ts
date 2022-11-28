import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1ResourcesQueryParams extends SpeakeasyBase {
    googleAuthReturnUrl?: string;
    outlookAuthReturnUrl?: string;
}
export declare class PostSetupV1ResourcesRequests extends SpeakeasyBase {
    resourceInputModel?: shared.ResourceInputModel;
    resourceInputModel1?: shared.ResourceInputModel;
    resourceInputModel2?: shared.ResourceInputModel;
    resourceInputModel3?: shared.ResourceInputModel;
}
export declare class PostSetupV1ResourcesRequest extends SpeakeasyBase {
    queryParams: PostSetupV1ResourcesQueryParams;
    request?: PostSetupV1ResourcesRequests;
}
export declare class PostSetupV1ResourcesResponse extends SpeakeasyBase {
    contentType: string;
    resourceViewModel?: shared.ResourceViewModel;
    statusCode: number;
}
