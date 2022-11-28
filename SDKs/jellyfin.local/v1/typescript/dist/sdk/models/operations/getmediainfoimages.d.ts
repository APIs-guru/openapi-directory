import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMediaInfoImagesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetMediaInfoImagesRequest extends SpeakeasyBase {
    security: GetMediaInfoImagesSecurity;
}
export declare class GetMediaInfoImagesResponse extends SpeakeasyBase {
    contentType: string;
    imageByNameInfos?: shared.ImageByNameInfo[];
    statusCode: number;
}
