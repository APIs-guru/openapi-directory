import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionHelpPathParams extends SpeakeasyBase {
    actionId: string;
    serviceId: string;
}
export declare class ActionHelpRequest extends SpeakeasyBase {
    pathParams: ActionHelpPathParams;
}
export declare class ActionHelpResponse extends SpeakeasyBase {
    actionHelpResponse?: shared.ActionHelpResponse;
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
