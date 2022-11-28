import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSpecialFeaturesPathParams extends SpeakeasyBase {
    itemId: string;
    userId: string;
}
export declare class GetSpecialFeaturesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetSpecialFeaturesRequest extends SpeakeasyBase {
    pathParams: GetSpecialFeaturesPathParams;
    security: GetSpecialFeaturesSecurity;
}
export declare class GetSpecialFeaturesResponse extends SpeakeasyBase {
    baseItemDtos?: shared.BaseItemDto[];
    contentType: string;
    statusCode: number;
}
