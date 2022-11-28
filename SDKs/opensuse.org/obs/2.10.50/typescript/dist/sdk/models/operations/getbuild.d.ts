import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBuildSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetBuildRequest extends SpeakeasyBase {
    security: GetBuildSecurity;
}
export declare class GetBuildResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
