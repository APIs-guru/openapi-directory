import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatafusionProjectsLocationsInstancesDnsPeeringsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatafusionProjectsLocationsInstancesDnsPeeringsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dnsPeeringId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatafusionProjectsLocationsInstancesDnsPeeringsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatafusionProjectsLocationsInstancesDnsPeeringsCreateRequest extends SpeakeasyBase {
    pathParams: DatafusionProjectsLocationsInstancesDnsPeeringsCreatePathParams;
    queryParams: DatafusionProjectsLocationsInstancesDnsPeeringsCreateQueryParams;
    request?: shared.DnsPeering;
    security: DatafusionProjectsLocationsInstancesDnsPeeringsCreateSecurity;
}
export declare class DatafusionProjectsLocationsInstancesDnsPeeringsCreateResponse extends SpeakeasyBase {
    contentType: string;
    dnsPeering?: shared.DnsPeering;
    statusCode: number;
}
