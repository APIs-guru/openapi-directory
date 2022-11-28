import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLineupsQueryParams extends SpeakeasyBase {
    country?: string;
    id?: string;
    location?: string;
    type?: string;
}
export declare class GetLineupsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetLineupsRequest extends SpeakeasyBase {
    queryParams: GetLineupsQueryParams;
    security: GetLineupsSecurity;
}
export declare class GetLineupsResponse extends SpeakeasyBase {
    contentType: string;
    nameIdPairs?: shared.NameIdPair[];
    statusCode: number;
}
