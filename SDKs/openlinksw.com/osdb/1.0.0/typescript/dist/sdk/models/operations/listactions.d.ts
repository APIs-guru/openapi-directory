import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListActionsPathParams extends SpeakeasyBase {
    serviceId: string;
}
export declare class ListActionsRequest extends SpeakeasyBase {
    pathParams: ListActionsPathParams;
}
export declare class ListActionsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    listActionsResponse?: shared.ListActionsResponse;
    statusCode: number;
}
