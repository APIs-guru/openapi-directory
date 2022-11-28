import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsClustersSetResourceLabelsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContainerProjectsLocationsClustersSetResourceLabelsQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsLocationsClustersSetResourceLabelsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsLocationsClustersSetResourceLabelsRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsClustersSetResourceLabelsPathParams;
    queryParams: ContainerProjectsLocationsClustersSetResourceLabelsQueryParams;
    request?: shared.SetLabelsRequest;
    security: ContainerProjectsLocationsClustersSetResourceLabelsSecurity;
}
export declare class ContainerProjectsLocationsClustersSetResourceLabelsResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
