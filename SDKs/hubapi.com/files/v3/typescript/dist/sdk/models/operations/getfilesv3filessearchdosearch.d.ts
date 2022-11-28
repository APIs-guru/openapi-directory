import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFilesV3FilesSearchDoSearchQueryParams extends SpeakeasyBase {
    after?: string;
    allowsAnonymousAccess?: boolean;
    before?: string;
    createdAt?: Date;
    createdAtGte?: Date;
    createdAtLte?: Date;
    encoding?: string;
    extension?: string;
    height?: number;
    id?: string;
    isUsableInContent?: boolean;
    limit?: number;
    name?: string;
    parentFolderId?: number;
    path?: string;
    properties?: string[];
    size?: number;
    sort?: string[];
    type?: string;
    updatedAt?: Date;
    updatedAtGte?: Date;
    updatedAtLte?: Date;
    url?: string;
    width?: number;
}
export declare class GetFilesV3FilesSearchDoSearchSecurity extends SpeakeasyBase {
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy1?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy1?: shared.SchemeOauth2Legacy;
}
export declare class GetFilesV3FilesSearchDoSearchRequest extends SpeakeasyBase {
    queryParams: GetFilesV3FilesSearchDoSearchQueryParams;
    security: GetFilesV3FilesSearchDoSearchSecurity;
}
export declare class GetFilesV3FilesSearchDoSearchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    collectionResponseFile?: shared.CollectionResponseFile;
    contentType: string;
    statusCode: number;
}
