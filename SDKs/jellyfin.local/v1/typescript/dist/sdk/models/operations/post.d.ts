import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class PostQueryParams extends SpeakeasyBase {
    imageRefreshMode?: shared.MetadataRefreshModeEnum;
    metadataRefreshMode?: shared.MetadataRefreshModeEnum;
    replaceAllImages?: boolean;
    replaceAllMetadata?: boolean;
}
export declare class PostSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class PostRequest extends SpeakeasyBase {
    pathParams: PostPathParams;
    queryParams: PostQueryParams;
    security: PostSecurity;
}
export declare class PostResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
