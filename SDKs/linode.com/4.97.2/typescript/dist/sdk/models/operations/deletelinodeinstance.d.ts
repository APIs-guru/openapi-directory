import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteLinodeInstancePathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class DeleteLinodeInstanceSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteLinodeInstanceRequest extends SpeakeasyBase {
    pathParams: DeleteLinodeInstancePathParams;
    security: DeleteLinodeInstanceSecurity;
}
export declare class DeleteLinodeInstanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteLinodeInstance200ApplicationJsonObject?: Map<string, any>;
    deleteLinodeInstanceDefaultApplicationJsonObject?: DeleteLinodeInstanceDefaultApplicationJson;
}
