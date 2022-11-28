import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatafusionProjectsLocationsInstancesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatafusionProjectsLocationsInstancesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    instanceId?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatafusionProjectsLocationsInstancesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatafusionProjectsLocationsInstancesCreateRequest extends SpeakeasyBase {
    pathParams: DatafusionProjectsLocationsInstancesCreatePathParams;
    queryParams: DatafusionProjectsLocationsInstancesCreateQueryParams;
    request?: shared.InstanceInput;
    security: DatafusionProjectsLocationsInstancesCreateSecurity;
}
export declare class DatafusionProjectsLocationsInstancesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
