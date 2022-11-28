import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPagesCountJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetPagesCountJsonRequest extends SpeakeasyBase {
    queryParams: GetPagesCountJsonQueryParams;
}
export declare class GetPagesCountJsonResponse extends SpeakeasyBase {
    contentType: string;
    count?: any;
    statusCode: number;
}
