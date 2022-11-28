import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetFulfillmentsCountJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetFulfillmentsCountJsonRequest extends SpeakeasyBase {
    queryParams: GetFulfillmentsCountJsonQueryParams;
}
export declare class GetFulfillmentsCountJsonResponse extends SpeakeasyBase {
    contentType: string;
    count?: any;
    statusCode: number;
}
