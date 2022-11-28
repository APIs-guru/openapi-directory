import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PropertyControllerGetPropertiesPhotosPathParams extends SpeakeasyBase {
    propertyId: string;
    shortName: string;
}
export declare class PropertyControllerGetPropertiesPhotosQueryParams extends SpeakeasyBase {
    count: number;
    offset: number;
    token: string;
}
export declare class PropertyControllerGetPropertiesPhotosRequest extends SpeakeasyBase {
    pathParams: PropertyControllerGetPropertiesPhotosPathParams;
    queryParams: PropertyControllerGetPropertiesPhotosQueryParams;
}
export declare class PropertyControllerGetPropertiesPhotosResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    landlordPhotoModelResults?: shared.LandlordPhotoModelResults;
    statusCode: number;
}
