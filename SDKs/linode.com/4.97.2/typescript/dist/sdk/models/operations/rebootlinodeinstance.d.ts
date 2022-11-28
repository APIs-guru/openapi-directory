import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RebootLinodeInstancePathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class RebootLinodeInstanceSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class RebootLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class RebootLinodeInstanceRequest extends SpeakeasyBase {
    pathParams: RebootLinodeInstancePathParams;
    request?: any;
    security: RebootLinodeInstanceSecurity;
}
export declare class RebootLinodeInstanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rebootLinodeInstance200ApplicationJsonObject?: Map<string, any>;
    rebootLinodeInstanceDefaultApplicationJsonObject?: RebootLinodeInstanceDefaultApplicationJson;
}
