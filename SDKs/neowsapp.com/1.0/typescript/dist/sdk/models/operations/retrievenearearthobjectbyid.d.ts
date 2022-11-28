import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetrieveNearEarthObjectByIdPathParams extends SpeakeasyBase {
    asteroidId: string;
}
export declare class RetrieveNearEarthObjectByIdRequest extends SpeakeasyBase {
    pathParams: RetrieveNearEarthObjectByIdPathParams;
}
export declare class RetrieveNearEarthObjectByIdResponse extends SpeakeasyBase {
    contentType: string;
    nearEarthObject?: shared.NearEarthObject;
    statusCode: number;
}
