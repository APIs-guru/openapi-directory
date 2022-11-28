import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRegions200ApplicationJson extends SpeakeasyBase {
    data?: shared.Region[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetRegionsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetRegionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getRegions200ApplicationJsonObject?: GetRegions200ApplicationJson;
    getRegionsDefaultApplicationJsonObject?: GetRegionsDefaultApplicationJson;
}
