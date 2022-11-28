import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasRecentActivityReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class ExtrasRecentActivityReadRequest extends SpeakeasyBase {
    pathParams: ExtrasRecentActivityReadPathParams;
}
export declare class ExtrasRecentActivityReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userAction?: shared.UserAction;
}
