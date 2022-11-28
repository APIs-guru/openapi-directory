import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDepPathParams extends SpeakeasyBase {
    registrierkasseUuid: string;
}
export declare class GetDepRequest extends SpeakeasyBase {
    pathParams: GetDepPathParams;
}
export declare class GetDepResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
