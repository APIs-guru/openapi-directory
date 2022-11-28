import { SpeakeasyBase } from "../../../internal/utils";
export declare class AnonymizePathParams extends SpeakeasyBase {
    anonymized: boolean;
    source: string;
}
export declare class AnonymizeRequest extends SpeakeasyBase {
    pathParams: AnonymizePathParams;
}
export declare class AnonymizeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
