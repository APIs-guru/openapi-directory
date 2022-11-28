import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksFamilysharingGetFamilyInfoQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    source?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BooksFamilysharingGetFamilyInfoSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksFamilysharingGetFamilyInfoRequest extends SpeakeasyBase {
    queryParams: BooksFamilysharingGetFamilyInfoQueryParams;
    security: BooksFamilysharingGetFamilyInfoSecurity;
}
export declare class BooksFamilysharingGetFamilyInfoResponse extends SpeakeasyBase {
    contentType: string;
    familyInfo?: shared.FamilyInfo;
    statusCode: number;
}
