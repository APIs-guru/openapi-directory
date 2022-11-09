import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsInstancesSetLabelsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NotebooksProjectsLocationsInstancesSetLabelsQueryParams extends SpeakeasyBase {
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
export declare class NotebooksProjectsLocationsInstancesSetLabelsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsInstancesSetLabelsRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsInstancesSetLabelsPathParams;
    queryParams: NotebooksProjectsLocationsInstancesSetLabelsQueryParams;
    request?: shared.SetInstanceLabelsRequest;
    security: NotebooksProjectsLocationsInstancesSetLabelsSecurity;
}
export declare class NotebooksProjectsLocationsInstancesSetLabelsResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
