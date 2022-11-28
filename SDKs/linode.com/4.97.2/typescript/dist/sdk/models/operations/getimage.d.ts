import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetImagePathParams extends SpeakeasyBase {
    imageId: string;
}
export declare class GetImageDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetImageRequest extends SpeakeasyBase {
    pathParams: GetImagePathParams;
}
export declare class GetImageResponse extends SpeakeasyBase {
    contentType: string;
    imagePrivate?: shared.ImagePrivate;
    statusCode: number;
    getImageDefaultApplicationJsonObject?: GetImageDefaultApplicationJson;
}
