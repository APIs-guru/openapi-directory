import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MutateLinodeInstancePathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class MutateLinodeInstanceRequestBody extends SpeakeasyBase {
    allowAutoDiskResize?: boolean;
}
export declare class MutateLinodeInstanceSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class MutateLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class MutateLinodeInstanceRequest extends SpeakeasyBase {
    pathParams: MutateLinodeInstancePathParams;
    request?: MutateLinodeInstanceRequestBody;
    security: MutateLinodeInstanceSecurity;
}
export declare class MutateLinodeInstanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    mutateLinodeInstance200ApplicationJsonObject?: Map<string, any>;
    mutateLinodeInstanceDefaultApplicationJsonObject?: MutateLinodeInstanceDefaultApplicationJson;
}
