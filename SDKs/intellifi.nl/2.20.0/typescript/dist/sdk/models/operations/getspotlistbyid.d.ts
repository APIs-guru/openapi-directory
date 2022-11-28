import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSpotListByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSpotListByIdRequest extends SpeakeasyBase {
    pathParams: GetSpotListByIdPathParams;
}
export declare class GetSpotListByIdResponse extends SpeakeasyBase {
    contentType: string;
    spotList?: shared.SpotList;
    statusCode: number;
}
