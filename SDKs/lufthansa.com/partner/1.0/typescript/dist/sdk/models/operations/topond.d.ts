import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TopOndQueryParams extends SpeakeasyBase {
    catalogues?: string;
    origin?: string;
}
export declare class TopOndHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class TopOndSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class TopOndRequest extends SpeakeasyBase {
    queryParams: TopOndQueryParams;
    headers: TopOndHeaders;
    security: TopOndSecurity;
}
export declare class TopOndResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    topOnd200ApplicationJsonString?: string;
}
