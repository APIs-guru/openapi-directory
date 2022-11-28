import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomainZonePathParams extends SpeakeasyBase {
    domainId: string;
}
export declare class GetDomainZoneSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetDomainZoneDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetDomainZoneRequest extends SpeakeasyBase {
    pathParams: GetDomainZonePathParams;
    security: GetDomainZoneSecurity;
}
export declare class GetDomainZoneResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDomainZone200ApplicationJsonAny?: any;
    getDomainZoneDefaultApplicationJsonObject?: GetDomainZoneDefaultApplicationJson;
}
