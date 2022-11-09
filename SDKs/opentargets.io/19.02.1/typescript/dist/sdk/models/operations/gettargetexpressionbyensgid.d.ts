import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetTargetExpressionByEnsgidQueryParams extends SpeakeasyBase {
    gene: string;
}
export declare class GetTargetExpressionByEnsgidRequest extends SpeakeasyBase {
    queryParams: GetTargetExpressionByEnsgidQueryParams;
}
export declare class GetTargetExpressionByEnsgidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
