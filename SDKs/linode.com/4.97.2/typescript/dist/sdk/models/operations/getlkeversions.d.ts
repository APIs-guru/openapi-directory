import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLkeVersionsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetLkeVersions200ApplicationJson extends SpeakeasyBase {
    data?: shared.LkeVersion[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetLkeVersionsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLkeVersionsRequest extends SpeakeasyBase {
    security: GetLkeVersionsSecurity;
}
export declare class GetLkeVersionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLkeVersions200ApplicationJsonObject?: GetLkeVersions200ApplicationJson;
    getLkeVersionsDefaultApplicationJsonObject?: GetLkeVersionsDefaultApplicationJson;
}
