import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsInstancesSetAcceleratorPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NotebooksProjectsLocationsInstancesSetAcceleratorQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NotebooksProjectsLocationsInstancesSetAcceleratorSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsInstancesSetAcceleratorRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsInstancesSetAcceleratorPathParams;
    queryParams: NotebooksProjectsLocationsInstancesSetAcceleratorQueryParams;
    request?: shared.SetInstanceAcceleratorRequest;
    security: NotebooksProjectsLocationsInstancesSetAcceleratorSecurity;
}
export declare class NotebooksProjectsLocationsInstancesSetAcceleratorResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
