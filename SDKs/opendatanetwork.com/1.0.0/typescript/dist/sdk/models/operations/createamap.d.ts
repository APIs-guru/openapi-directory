import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CreateAMapQueryParams extends SpeakeasyBase {
    appToken?: string;
    constraint?: string;
    entityId: string;
    variable: string;
}
export declare class CreateAMapHeaders extends SpeakeasyBase {
    xAppToken?: string;
}
export declare class CreateAMapRequest extends SpeakeasyBase {
    queryParams: CreateAMapQueryParams;
    headers: CreateAMapHeaders;
}
export declare class CreateAMapResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
