import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsupportMediaUploadPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudsupportMediaUploadQueryParams extends SpeakeasyBase {
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
export declare class CloudsupportMediaUploadRequestsInput extends SpeakeasyBase {
    applicationOctetStream: Uint8Array;
    createAttachmentRequest?: shared.CreateAttachmentRequestInput;
}
export declare class CloudsupportMediaUploadSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsupportMediaUploadRequest extends SpeakeasyBase {
    pathParams: CloudsupportMediaUploadPathParams;
    queryParams: CloudsupportMediaUploadQueryParams;
    request?: CloudsupportMediaUploadRequestsInput;
    security: CloudsupportMediaUploadSecurity;
}
export declare class CloudsupportMediaUploadResponse extends SpeakeasyBase {
    attachment?: shared.Attachment;
    contentType: string;
    statusCode: number;
}
