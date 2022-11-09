import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class NeighborhoodInAStreetPathParams extends SpeakeasyBase {
    country: string;
    district: string;
    region: string;
    street: string;
    ward: string;
}
export declare class NeighborhoodInAStreetRequest extends SpeakeasyBase {
    pathParams: NeighborhoodInAStreetPathParams;
}
export declare class NeighborhoodInAStreetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
