import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AllServiceGroupsSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class AllServiceGroupsRequest extends SpeakeasyBase {
    security: AllServiceGroupsSecurity;
}
export declare class AllServiceGroupsResponse extends SpeakeasyBase {
    contentType: string;
    groups?: shared.Group[];
    statusCode: number;
}
