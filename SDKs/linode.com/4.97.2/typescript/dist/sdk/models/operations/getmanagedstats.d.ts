import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetManagedStatsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetManagedStats200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class GetManagedStatsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetManagedStatsRequest extends SpeakeasyBase {
    security: GetManagedStatsSecurity;
}
export declare class GetManagedStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getManagedStats200ApplicationJsonObject?: GetManagedStats200ApplicationJson;
    getManagedStatsDefaultApplicationJsonObject?: GetManagedStatsDefaultApplicationJson;
}
