import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStatusByUuidPathParams extends SpeakeasyBase {
    importUuid: string;
    organizationUuid: string;
}
export declare class GetStatusByUuidSecurity extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class GetStatusByUuidRequest extends SpeakeasyBase {
    pathParams: GetStatusByUuidPathParams;
    security: GetStatusByUuidSecurity;
}
export declare class GetStatusByUuidResponse extends SpeakeasyBase {
    contentType: string;
    importResponse?: shared.ImportResponse;
    statusCode: number;
}
