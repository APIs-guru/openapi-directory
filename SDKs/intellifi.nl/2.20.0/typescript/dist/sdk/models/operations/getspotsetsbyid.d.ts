import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSpotSetsByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSpotSetsByIdRequest extends SpeakeasyBase {
    pathParams: GetSpotSetsByIdPathParams;
}
export declare class GetSpotSetsByIdResponse extends SpeakeasyBase {
    contentType: string;
    spotSet?: shared.SpotSet;
    statusCode: number;
}
