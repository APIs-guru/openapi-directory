import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StreetviewpublishPhotoSequenceCreateInputTypeEnum {
    InputTypeUnspecified = "INPUT_TYPE_UNSPECIFIED",
    Video = "VIDEO",
    Xdm = "XDM"
}
export declare class StreetviewpublishPhotoSequenceCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    inputType?: StreetviewpublishPhotoSequenceCreateInputTypeEnum;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class StreetviewpublishPhotoSequenceCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StreetviewpublishPhotoSequenceCreateRequest extends SpeakeasyBase {
    queryParams: StreetviewpublishPhotoSequenceCreateQueryParams;
    request?: shared.PhotoSequenceInput;
    security: StreetviewpublishPhotoSequenceCreateSecurity;
}
export declare class StreetviewpublishPhotoSequenceCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
