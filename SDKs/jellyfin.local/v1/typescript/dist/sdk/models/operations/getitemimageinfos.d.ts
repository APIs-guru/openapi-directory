import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemImageInfosPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetItemImageInfosSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetItemImageInfosRequest extends SpeakeasyBase {
    pathParams: GetItemImageInfosPathParams;
    security: GetItemImageInfosSecurity;
}
export declare class GetItemImageInfosResponse extends SpeakeasyBase {
    contentType: string;
    imageInfos?: shared.ImageInfo[];
    problemDetails?: Map<string, any>;
    statusCode: number;
}
