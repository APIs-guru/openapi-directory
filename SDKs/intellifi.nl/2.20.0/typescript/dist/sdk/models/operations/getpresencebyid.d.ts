import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPresenceByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPresenceByIdRequest extends SpeakeasyBase {
    pathParams: GetPresenceByIdPathParams;
}
export declare class GetPresenceByIdResponse extends SpeakeasyBase {
    contentType: string;
    presence?: shared.Presence;
    statusCode: number;
}
