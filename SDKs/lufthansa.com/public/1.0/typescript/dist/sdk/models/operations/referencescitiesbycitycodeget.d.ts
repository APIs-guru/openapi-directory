import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReferencesCitiesByCityCodeGetPathParams extends SpeakeasyBase {
    cityCode: string;
}
export declare class ReferencesCitiesByCityCodeGetQueryParams extends SpeakeasyBase {
    lang?: string;
    limit?: string;
    offset?: string;
}
export declare class ReferencesCitiesByCityCodeGetHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class ReferencesCitiesByCityCodeGetSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class ReferencesCitiesByCityCodeGetRequest extends SpeakeasyBase {
    pathParams: ReferencesCitiesByCityCodeGetPathParams;
    queryParams: ReferencesCitiesByCityCodeGetQueryParams;
    headers: ReferencesCitiesByCityCodeGetHeaders;
    security: ReferencesCitiesByCityCodeGetSecurity;
}
export declare class ReferencesCitiesByCityCodeGetResponse extends SpeakeasyBase {
    contentType: string;
    referencesCitiesByCityCodeGet200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
