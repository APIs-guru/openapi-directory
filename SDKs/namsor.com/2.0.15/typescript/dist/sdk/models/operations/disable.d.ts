import { SpeakeasyBase } from "../../../internal/utils";
export declare class DisablePathParams extends SpeakeasyBase {
    disabled: boolean;
    source: string;
}
export declare class DisableRequest extends SpeakeasyBase {
    pathParams: DisablePathParams;
}
export declare class DisableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
