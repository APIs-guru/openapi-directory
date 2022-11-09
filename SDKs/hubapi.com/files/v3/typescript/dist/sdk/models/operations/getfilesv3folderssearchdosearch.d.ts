import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFilesV3FoldersSearchDoSearchQueryParams extends SpeakeasyBase {
    after?: string;
    before?: string;
    createdAt?: Date;
    createdAtGte?: Date;
    createdAtLte?: Date;
    id?: string;
    limit?: number;
    name?: string;
    parentFolderId?: number;
    path?: string;
    properties?: string[];
    sort?: string[];
    updatedAt?: Date;
    updatedAtGte?: Date;
    updatedAtLte?: Date;
}
export declare class GetFilesV3FoldersSearchDoSearchSecurityOption1 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class GetFilesV3FoldersSearchDoSearchSecurityOption2 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class GetFilesV3FoldersSearchDoSearchSecurityOption3 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class GetFilesV3FoldersSearchDoSearchSecurity extends SpeakeasyBase {
    option1?: GetFilesV3FoldersSearchDoSearchSecurityOption1;
    option2?: GetFilesV3FoldersSearchDoSearchSecurityOption2;
    option3?: GetFilesV3FoldersSearchDoSearchSecurityOption3;
}
export declare class GetFilesV3FoldersSearchDoSearchRequest extends SpeakeasyBase {
    queryParams: GetFilesV3FoldersSearchDoSearchQueryParams;
    security: GetFilesV3FoldersSearchDoSearchSecurity;
}
export declare class GetFilesV3FoldersSearchDoSearchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    collectionResponseFolder?: shared.CollectionResponseFolder;
    contentType: string;
    statusCode: number;
}
