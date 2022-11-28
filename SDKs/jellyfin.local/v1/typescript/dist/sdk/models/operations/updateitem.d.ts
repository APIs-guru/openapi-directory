import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateItemPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class UpdateItemRequestsInput extends SpeakeasyBase {
    baseItemDto?: shared.BaseItemDtoInput;
    baseItemDto1?: shared.BaseItemDtoInput;
    baseItemDto2?: shared.BaseItemDtoInput;
}
export declare class UpdateItemSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UpdateItemRequest extends SpeakeasyBase {
    pathParams: UpdateItemPathParams;
    request: UpdateItemRequestsInput;
    security: UpdateItemSecurity;
}
export declare class UpdateItemResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
