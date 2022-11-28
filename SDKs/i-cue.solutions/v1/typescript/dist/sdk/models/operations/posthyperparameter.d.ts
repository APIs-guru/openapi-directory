import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostHyperparameterHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostHyperparameterRequests extends SpeakeasyBase {
    hyperparameterModel?: shared.HyperparameterModel;
    hyperparameterModel1?: shared.HyperparameterModel;
    hyperparameterModel2?: shared.HyperparameterModel;
}
export declare class PostHyperparameterRequest extends SpeakeasyBase {
    headers: PostHyperparameterHeaders;
    request?: PostHyperparameterRequests;
}
export declare class PostHyperparameterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
