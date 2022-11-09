import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class StreetsInAWardPathParams extends SpeakeasyBase {
    country: string;
    district: string;
    region: string;
    ward: string;
}
export declare class StreetsInAWardRequest extends SpeakeasyBase {
    pathParams: StreetsInAWardPathParams;
}
export declare class StreetsInAWardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
