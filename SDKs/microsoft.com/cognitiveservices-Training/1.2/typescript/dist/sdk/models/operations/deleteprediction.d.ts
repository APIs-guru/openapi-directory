import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeletePredictionPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class DeletePredictionQueryParams extends SpeakeasyBase {
    ids: string[];
}
export declare class DeletePredictionHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class DeletePredictionRequest extends SpeakeasyBase {
    pathParams: DeletePredictionPathParams;
    queryParams: DeletePredictionQueryParams;
    headers: DeletePredictionHeaders;
}
export declare class DeletePredictionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
