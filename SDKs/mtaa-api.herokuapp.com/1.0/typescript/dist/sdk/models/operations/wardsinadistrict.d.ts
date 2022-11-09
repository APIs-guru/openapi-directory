import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class WardsInADistrictPathParams extends SpeakeasyBase {
    country: string;
    district: string;
    region: string;
}
export declare class WardsInADistrictRequest extends SpeakeasyBase {
    pathParams: WardsInADistrictPathParams;
}
export declare class WardsInADistrictResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
