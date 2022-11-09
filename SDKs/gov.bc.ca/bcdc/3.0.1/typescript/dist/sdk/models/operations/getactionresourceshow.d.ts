import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetActionResourceShowQueryParams extends SpeakeasyBase {
    id?: string;
    includeTracking?: boolean;
}
export declare class GetActionResourceShowRequest extends SpeakeasyBase {
    queryParams: GetActionResourceShowQueryParams;
}
export declare class GetActionResourceShowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
