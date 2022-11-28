import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocumentaiUiv1beta3ProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DocumentaiUiv1beta3ProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class DocumentaiUiv1beta3ProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocumentaiUiv1beta3ProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: DocumentaiUiv1beta3ProjectsLocationsOperationsCancelPathParams;
    queryParams: DocumentaiUiv1beta3ProjectsLocationsOperationsCancelQueryParams;
    security: DocumentaiUiv1beta3ProjectsLocationsOperationsCancelSecurity;
}
export declare class DocumentaiUiv1beta3ProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
