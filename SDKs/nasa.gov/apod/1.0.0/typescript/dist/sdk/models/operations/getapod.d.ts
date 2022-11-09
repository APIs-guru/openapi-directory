import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetApodQueryParams extends SpeakeasyBase {
    date?: string;
    hd?: boolean;
}
export declare class GetApodSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetApodRequest extends SpeakeasyBase {
    queryParams: GetApodQueryParams;
    security: GetApodSecurity;
}
export declare class GetApodResponse extends SpeakeasyBase {
    contentType: string;
    getApod200ApplicationJsonAnies?: any[];
    statusCode: number;
}
