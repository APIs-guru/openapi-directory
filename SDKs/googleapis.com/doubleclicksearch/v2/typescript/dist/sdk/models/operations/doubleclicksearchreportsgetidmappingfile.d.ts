import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DoubleclicksearchReportsGetIdMappingFilePathParams extends SpeakeasyBase {
    advertiserId: string;
    agencyId: string;
}
export declare class DoubleclicksearchReportsGetIdMappingFileQueryParams extends SpeakeasyBase {
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
export declare class DoubleclicksearchReportsGetIdMappingFileSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DoubleclicksearchReportsGetIdMappingFileRequest extends SpeakeasyBase {
    pathParams: DoubleclicksearchReportsGetIdMappingFilePathParams;
    queryParams: DoubleclicksearchReportsGetIdMappingFileQueryParams;
    security: DoubleclicksearchReportsGetIdMappingFileSecurity;
}
export declare class DoubleclicksearchReportsGetIdMappingFileResponse extends SpeakeasyBase {
    contentType: string;
    idMappingFile?: Map<string, any>;
    statusCode: number;
}
