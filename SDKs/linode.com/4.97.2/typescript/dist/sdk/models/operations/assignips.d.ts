import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssignIPsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class AssignIPsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class AssignIPsRequest extends SpeakeasyBase {
    request: any;
    security: AssignIPsSecurity;
}
export declare class AssignIPsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    assignIPs200ApplicationJsonObject?: Map<string, any>;
    assignIPsDefaultApplicationJsonObject?: AssignIPsDefaultApplicationJson;
}
