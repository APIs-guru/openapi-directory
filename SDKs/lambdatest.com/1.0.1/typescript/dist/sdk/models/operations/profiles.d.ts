import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProfilesSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class ProfilesRequest extends SpeakeasyBase {
    security: ProfilesSecurity;
}
export declare class ProfilesResponse extends SpeakeasyBase {
    accessDenied?: any;
    contentType: string;
    statusCode: number;
    profiles?: shared.Profiles;
}
