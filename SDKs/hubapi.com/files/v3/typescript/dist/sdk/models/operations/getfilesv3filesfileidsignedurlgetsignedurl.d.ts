import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFilesV3FilesFileIdSignedUrlGetSignedUrlPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare enum GetFilesV3FilesFileIdSignedUrlGetSignedUrlSizeEnum {
    Thumb = "thumb",
    Icon = "icon",
    Medium = "medium",
    Preview = "preview"
}
export declare class GetFilesV3FilesFileIdSignedUrlGetSignedUrlQueryParams extends SpeakeasyBase {
    expirationSeconds?: number;
    size?: GetFilesV3FilesFileIdSignedUrlGetSignedUrlSizeEnum;
    upscale?: boolean;
}
export declare class GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption1 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption2 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption3 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurity extends SpeakeasyBase {
    option1?: GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption1;
    option2?: GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption2;
    option3?: GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption3;
}
export declare class GetFilesV3FilesFileIdSignedUrlGetSignedUrlRequest extends SpeakeasyBase {
    pathParams: GetFilesV3FilesFileIdSignedUrlGetSignedUrlPathParams;
    queryParams: GetFilesV3FilesFileIdSignedUrlGetSignedUrlQueryParams;
    security: GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurity;
}
export declare class GetFilesV3FilesFileIdSignedUrlGetSignedUrlResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    signedUrl?: shared.SignedUrl;
    statusCode: number;
}
