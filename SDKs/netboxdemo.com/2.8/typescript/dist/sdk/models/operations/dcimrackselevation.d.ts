import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRacksElevationPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum DcimRacksElevationFaceEnum {
    Front = "front",
    Rear = "rear"
}
export declare enum DcimRacksElevationRenderEnum {
    Json = "json",
    Svg = "svg"
}
export declare class DcimRacksElevationQueryParams extends SpeakeasyBase {
    exclude?: number;
    expandDevices?: boolean;
    face?: DcimRacksElevationFaceEnum;
    includeImages?: boolean;
    legendWidth?: number;
    q?: string;
    render?: DcimRacksElevationRenderEnum;
    unitHeight?: number;
    unitWidth?: number;
}
export declare class DcimRacksElevationRequest extends SpeakeasyBase {
    pathParams: DcimRacksElevationPathParams;
    queryParams: DcimRacksElevationQueryParams;
}
export declare class DcimRacksElevationResponse extends SpeakeasyBase {
    contentType: string;
    rackUnits?: shared.RackUnit[];
    statusCode: number;
}
