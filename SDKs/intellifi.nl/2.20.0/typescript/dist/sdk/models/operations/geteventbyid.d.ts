import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetEventByIdRequest extends SpeakeasyBase {
    pathParams: GetEventByIdPathParams;
}
export declare class GetEventByIdResponse extends SpeakeasyBase {
    contentType: string;
    event?: shared.Event;
    statusCode: number;
}
