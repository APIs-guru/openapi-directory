import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MigrateLinodeInstancePathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class MigrateLinodeInstanceSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class MigrateLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class MigrateLinodeInstanceRequest extends SpeakeasyBase {
    pathParams: MigrateLinodeInstancePathParams;
    request?: any;
    security: MigrateLinodeInstanceSecurity;
}
export declare class MigrateLinodeInstanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    migrateLinodeInstance200ApplicationJsonObject?: Map<string, any>;
    migrateLinodeInstanceDefaultApplicationJsonObject?: MigrateLinodeInstanceDefaultApplicationJson;
}
