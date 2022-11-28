import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RebuildLinodeInstancePathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class RebuildLinodeInstanceRequestBody extends SpeakeasyBase {
    authorizedKeys?: string[];
    authorizedUsers?: string[];
    booted?: boolean;
    image: string;
    rootPass: string;
    stackscriptData?: Map<string, any>;
    stackscriptId?: number;
}
export declare class RebuildLinodeInstanceSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class RebuildLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class RebuildLinodeInstanceRequest extends SpeakeasyBase {
    pathParams: RebuildLinodeInstancePathParams;
    request: RebuildLinodeInstanceRequestBody;
    security: RebuildLinodeInstanceSecurity;
}
export declare class RebuildLinodeInstanceResponse extends SpeakeasyBase {
    contentType: string;
    linode?: shared.Linode;
    statusCode: number;
    rebuildLinodeInstanceDefaultApplicationJsonObject?: RebuildLinodeInstanceDefaultApplicationJson;
}
