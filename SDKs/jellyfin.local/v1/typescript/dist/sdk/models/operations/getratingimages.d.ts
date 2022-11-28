import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRatingImagesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetRatingImagesRequest extends SpeakeasyBase {
    security: GetRatingImagesSecurity;
}
export declare class GetRatingImagesResponse extends SpeakeasyBase {
    contentType: string;
    imageByNameInfos?: shared.ImageByNameInfo[];
    statusCode: number;
}
