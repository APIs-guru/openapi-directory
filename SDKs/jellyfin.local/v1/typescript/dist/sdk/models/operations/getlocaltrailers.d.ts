import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLocalTrailersPathParams extends SpeakeasyBase {
    itemId: string;
    userId: string;
}
export declare class GetLocalTrailersSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetLocalTrailersRequest extends SpeakeasyBase {
    pathParams: GetLocalTrailersPathParams;
    security: GetLocalTrailersSecurity;
}
export declare class GetLocalTrailersResponse extends SpeakeasyBase {
    baseItemDtos?: shared.BaseItemDto[];
    contentType: string;
    statusCode: number;
}
