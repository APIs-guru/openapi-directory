import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetStoreLanguagesJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetStoreLanguagesJsonRequest extends SpeakeasyBase {
    queryParams: GetStoreLanguagesJsonQueryParams;
}
export declare class GetStoreLanguagesJsonResponse extends SpeakeasyBase {
    contentType: string;
    languages?: any[];
    statusCode: number;
}
