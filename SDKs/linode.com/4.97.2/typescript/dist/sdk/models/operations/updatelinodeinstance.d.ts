import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateLinodeInstancePathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class UpdateLinodeInstanceSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateLinodeInstanceRequest extends SpeakeasyBase {
    pathParams: UpdateLinodeInstancePathParams;
    request: shared.LinodeInput;
    security: UpdateLinodeInstanceSecurity;
}
export declare class UpdateLinodeInstanceResponse extends SpeakeasyBase {
    contentType: string;
    linode?: shared.Linode;
    statusCode: number;
    updateLinodeInstanceDefaultApplicationJsonObject?: UpdateLinodeInstanceDefaultApplicationJson;
}
