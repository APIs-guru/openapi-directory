import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGeneralImagesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetGeneralImagesRequest extends SpeakeasyBase {
    security: GetGeneralImagesSecurity;
}
export declare class GetGeneralImagesResponse extends SpeakeasyBase {
    contentType: string;
    imageByNameInfos?: shared.ImageByNameInfo[];
    statusCode: number;
}
