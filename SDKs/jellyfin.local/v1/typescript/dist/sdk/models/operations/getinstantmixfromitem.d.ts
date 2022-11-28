import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInstantMixFromItemPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetInstantMixFromItemQueryParams extends SpeakeasyBase {
    enableImageTypes?: shared.ImageTypeEnum[];
    enableImages?: boolean;
    enableUserData?: boolean;
    fields?: shared.ItemFieldsEnum[];
    imageTypeLimit?: number;
    limit?: number;
    userId?: string;
}
export declare class GetInstantMixFromItemSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetInstantMixFromItemRequest extends SpeakeasyBase {
    pathParams: GetInstantMixFromItemPathParams;
    queryParams: GetInstantMixFromItemQueryParams;
    security: GetInstantMixFromItemSecurity;
}
export declare class GetInstantMixFromItemResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
