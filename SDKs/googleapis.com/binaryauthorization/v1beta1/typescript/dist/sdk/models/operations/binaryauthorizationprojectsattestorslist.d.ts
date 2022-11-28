import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BinaryauthorizationProjectsAttestorsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BinaryauthorizationProjectsAttestorsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BinaryauthorizationProjectsAttestorsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BinaryauthorizationProjectsAttestorsListRequest extends SpeakeasyBase {
    pathParams: BinaryauthorizationProjectsAttestorsListPathParams;
    queryParams: BinaryauthorizationProjectsAttestorsListQueryParams;
    security: BinaryauthorizationProjectsAttestorsListSecurity;
}
export declare class BinaryauthorizationProjectsAttestorsListResponse extends SpeakeasyBase {
    contentType: string;
    listAttestorsResponse?: shared.ListAttestorsResponse;
    statusCode: number;
}
