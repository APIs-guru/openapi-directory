import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLinodeInstancePathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class GetLinodeInstanceSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLinodeInstanceRequest extends SpeakeasyBase {
    pathParams: GetLinodeInstancePathParams;
    security: GetLinodeInstanceSecurity;
}
export declare class GetLinodeInstanceResponse extends SpeakeasyBase {
    contentType: string;
    linode?: shared.Linode;
    statusCode: number;
    getLinodeInstanceDefaultApplicationJsonObject?: GetLinodeInstanceDefaultApplicationJson;
}
