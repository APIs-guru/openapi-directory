import { SpeakeasyBase } from "../../../internal/utils/utils";
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
export declare class GetFilesV3FilesSearchDoSearchSecurityOption1 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class GetFilesV3FilesSearchDoSearchSecurityOption2 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class GetFilesV3FilesSearchDoSearchSecurityOption3 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class GetFilesV3FilesSearchDoSearchSecurity extends SpeakeasyBase {
    option1?: GetFilesV3FilesSearchDoSearchSecurityOption1;
    option2?: GetFilesV3FilesSearchDoSearchSecurityOption2;
    option3?: GetFilesV3FilesSearchDoSearchSecurityOption3;
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
