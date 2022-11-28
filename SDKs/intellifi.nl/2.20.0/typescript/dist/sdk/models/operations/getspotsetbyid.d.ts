import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSpotSetByIdPathParams extends SpeakeasyBase {
    id: string;
    setId: string;
}
export declare class GetSpotSetByIdRequest extends SpeakeasyBase {
    pathParams: GetSpotSetByIdPathParams;
}
export declare class GetSpotSetByIdResponse extends SpeakeasyBase {
    contentType: string;
    spotSet?: shared.SpotSet;
    statusCode: number;
}
