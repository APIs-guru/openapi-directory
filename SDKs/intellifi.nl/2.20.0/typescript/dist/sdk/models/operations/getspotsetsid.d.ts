import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSpotsetsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSpotsetsIdRequest extends SpeakeasyBase {
    pathParams: GetSpotsetsIdPathParams;
}
export declare class GetSpotsetsIdResponse extends SpeakeasyBase {
    contentType: string;
    spotSet?: shared.SpotSet;
    statusCode: number;
}
