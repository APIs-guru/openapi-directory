import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasemlProjectsModelsDownloadPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebasemlProjectsModelsDownloadQueryParams extends SpeakeasyBase {
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
export declare class FirebasemlProjectsModelsDownloadRequest extends SpeakeasyBase {
    pathParams: FirebasemlProjectsModelsDownloadPathParams;
    queryParams: FirebasemlProjectsModelsDownloadQueryParams;
}
export declare class FirebasemlProjectsModelsDownloadResponse extends SpeakeasyBase {
    contentType: string;
    downloadModelResponse?: shared.DownloadModelResponse;
    statusCode: number;
}
