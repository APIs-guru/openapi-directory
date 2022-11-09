import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SearchconsoleUrlInspectionIndexInspectQueryParams extends SpeakeasyBase {
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
export declare class SearchconsoleUrlInspectionIndexInspectSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SearchconsoleUrlInspectionIndexInspectSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SearchconsoleUrlInspectionIndexInspectSecurity extends SpeakeasyBase {
    option1?: SearchconsoleUrlInspectionIndexInspectSecurityOption1;
    option2?: SearchconsoleUrlInspectionIndexInspectSecurityOption2;
}
export declare class SearchconsoleUrlInspectionIndexInspectRequest extends SpeakeasyBase {
    queryParams: SearchconsoleUrlInspectionIndexInspectQueryParams;
    request?: shared.InspectUrlIndexRequest;
    security: SearchconsoleUrlInspectionIndexInspectSecurity;
}
export declare class SearchconsoleUrlInspectionIndexInspectResponse extends SpeakeasyBase {
    contentType: string;
    inspectUrlIndexResponse?: shared.InspectUrlIndexResponse;
    statusCode: number;
}
