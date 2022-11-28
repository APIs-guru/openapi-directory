import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIntrosPathParams extends SpeakeasyBase {
    itemId: string;
    userId: string;
}
export declare class GetIntrosSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetIntrosRequest extends SpeakeasyBase {
    pathParams: GetIntrosPathParams;
    security: GetIntrosSecurity;
}
export declare class GetIntrosResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
