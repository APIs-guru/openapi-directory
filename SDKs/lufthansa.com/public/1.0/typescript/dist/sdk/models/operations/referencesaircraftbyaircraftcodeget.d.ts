import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ReferencesAircraftByAircraftCodeGetPathParams extends SpeakeasyBase {
    aircraftCode: string;
}
export declare class ReferencesAircraftByAircraftCodeGetQueryParams extends SpeakeasyBase {
    limit?: string;
    offset?: string;
}
export declare class ReferencesAircraftByAircraftCodeGetHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class ReferencesAircraftByAircraftCodeGetSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class ReferencesAircraftByAircraftCodeGetRequest extends SpeakeasyBase {
    pathParams: ReferencesAircraftByAircraftCodeGetPathParams;
    queryParams: ReferencesAircraftByAircraftCodeGetQueryParams;
    headers: ReferencesAircraftByAircraftCodeGetHeaders;
    security: ReferencesAircraftByAircraftCodeGetSecurity;
}
export declare class ReferencesAircraftByAircraftCodeGetResponse extends SpeakeasyBase {
    contentType: string;
    referencesAircraftByAircraftCodeGet200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
