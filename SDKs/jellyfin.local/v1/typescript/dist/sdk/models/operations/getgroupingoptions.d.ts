import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupingOptionsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetGroupingOptionsRequest extends SpeakeasyBase {
    pathParams: GetGroupingOptionsPathParams;
}
export declare class GetGroupingOptionsResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    specialViewOptionDtos?: shared.SpecialViewOptionDto[];
    statusCode: number;
}
