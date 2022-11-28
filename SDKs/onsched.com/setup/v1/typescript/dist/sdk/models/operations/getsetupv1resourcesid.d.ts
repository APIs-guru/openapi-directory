import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1ResourcesIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1ResourcesIdQueryParams extends SpeakeasyBase {
    googleAuthReturnUrl?: string;
    outlookAuthReturnUrl?: string;
}
export declare class GetSetupV1ResourcesIdRequest extends SpeakeasyBase {
    pathParams: GetSetupV1ResourcesIdPathParams;
    queryParams: GetSetupV1ResourcesIdQueryParams;
}
export declare class GetSetupV1ResourcesIdResponse extends SpeakeasyBase {
    contentType: string;
    resourceViewModel?: shared.ResourceViewModel;
    statusCode: number;
}
