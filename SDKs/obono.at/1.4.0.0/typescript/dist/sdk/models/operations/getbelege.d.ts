import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBelegePathParams extends SpeakeasyBase {
    registrierkasseUuid: string;
}
export declare enum GetBelegeFormatEnum {
    Export = "export",
    Beleg = "beleg",
    Uuidlist = "uuidlist"
}
export declare enum GetBelegeOrderEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetBelegeQueryParams extends SpeakeasyBase {
    after?: string;
    before?: string;
    format: GetBelegeFormatEnum;
    gte?: number;
    limit?: number;
    lte?: number;
    offset?: number;
    order?: GetBelegeOrderEnum;
}
export declare class GetBelegeRequest extends SpeakeasyBase {
    pathParams: GetBelegePathParams;
    queryParams: GetBelegeQueryParams;
}
export declare class GetBelegeResponse extends SpeakeasyBase {
    belege?: shared.Belege;
    contentType: string;
    statusCode: number;
}
