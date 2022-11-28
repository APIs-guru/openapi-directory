import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLatestMediaPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetLatestMediaQueryParams extends SpeakeasyBase {
    enableImageTypes?: shared.ImageTypeEnum[];
    enableImages?: boolean;
    enableUserData?: boolean;
    fields?: shared.ItemFieldsEnum[];
    groupItems?: boolean;
    imageTypeLimit?: number;
    includeItemTypes?: string[];
    isPlayed?: boolean;
    limit?: number;
    parentId?: string;
}
export declare class GetLatestMediaSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetLatestMediaRequest extends SpeakeasyBase {
    pathParams: GetLatestMediaPathParams;
    queryParams: GetLatestMediaQueryParams;
    security: GetLatestMediaSecurity;
}
export declare class GetLatestMediaResponse extends SpeakeasyBase {
    baseItemDtos?: shared.BaseItemDto[];
    contentType: string;
    statusCode: number;
}
