import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetemailinfoQueryParams extends SpeakeasyBase {
    email: string;
    license: string;
}
export declare class GetemailinfoRequest extends SpeakeasyBase {
    queryParams: GetemailinfoQueryParams;
}
export declare class Getemailinfo200ApplicationJson extends SpeakeasyBase {
    code?: string;
    credits?: string;
    email?: string;
    geolocation?: string;
    info?: string;
    isDisposable?: string;
    isEducational?: string;
    isGeneric?: string;
    isGovernment?: string;
    isOrganizational?: string;
    isVulgar?: string;
    response?: string;
}
export declare class GetemailinfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getemailinfo200ApplicationJsonObject?: Getemailinfo200ApplicationJson;
}
