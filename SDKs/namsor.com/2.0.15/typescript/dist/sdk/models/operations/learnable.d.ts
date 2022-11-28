import { SpeakeasyBase } from "../../../internal/utils";
export declare class LearnablePathParams extends SpeakeasyBase {
    learnable: boolean;
    source: string;
}
export declare class LearnableRequest extends SpeakeasyBase {
    pathParams: LearnablePathParams;
}
export declare class LearnableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
