import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostAppsQueryParams extends SpeakeasyBase {
    access?: string;
    allow?: string;
    attributes?: string;
    customData?: string;
    developerId: string;
    model?: string;
    name: string;
    restrict?: string;
    type?: string;
}
export declare class PostAppsRequest extends SpeakeasyBase {
    queryParams: PostAppsQueryParams;
}
export declare class PostAppsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
