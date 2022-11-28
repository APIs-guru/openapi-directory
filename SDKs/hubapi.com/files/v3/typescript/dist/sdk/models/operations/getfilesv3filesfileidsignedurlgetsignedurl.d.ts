import { SpeakeasyBase } from "../../../internal/utils";
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
export declare class GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurity extends SpeakeasyBase {
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy1?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy1?: shared.SchemeOauth2Legacy;
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
