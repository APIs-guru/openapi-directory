import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsClustersUpdateMasterPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContainerProjectsLocationsClustersUpdateMasterQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsLocationsClustersUpdateMasterSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsLocationsClustersUpdateMasterRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsClustersUpdateMasterPathParams;
    queryParams: ContainerProjectsLocationsClustersUpdateMasterQueryParams;
    request?: shared.UpdateMasterRequest;
    security: ContainerProjectsLocationsClustersUpdateMasterSecurity;
}
export declare class ContainerProjectsLocationsClustersUpdateMasterResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
