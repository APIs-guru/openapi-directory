import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsInstancesSetMachineTypePathParams extends SpeakeasyBase {
    name: string;
}
export declare class NotebooksProjectsLocationsInstancesSetMachineTypeQueryParams extends SpeakeasyBase {
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
export declare class NotebooksProjectsLocationsInstancesSetMachineTypeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsInstancesSetMachineTypeRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsInstancesSetMachineTypePathParams;
    queryParams: NotebooksProjectsLocationsInstancesSetMachineTypeQueryParams;
    request?: shared.SetInstanceMachineTypeRequest;
    security: NotebooksProjectsLocationsInstancesSetMachineTypeSecurity;
}
export declare class NotebooksProjectsLocationsInstancesSetMachineTypeResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
