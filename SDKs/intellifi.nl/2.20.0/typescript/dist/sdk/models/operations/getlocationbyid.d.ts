import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLocationByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetLocationByIdRequest extends SpeakeasyBase {
    pathParams: GetLocationByIdPathParams;
}
export declare class GetLocationByIdResponse extends SpeakeasyBase {
    contentType: string;
    location?: shared.Location;
    statusCode: number;
}
