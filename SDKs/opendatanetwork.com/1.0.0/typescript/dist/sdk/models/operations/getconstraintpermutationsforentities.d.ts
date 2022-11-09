import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetConstraintPermutationsForEntitiesPathParams extends SpeakeasyBase {
    variable: string;
}
export declare class GetConstraintPermutationsForEntitiesQueryParams extends SpeakeasyBase {
    appToken?: string;
    constraint: string;
    entityId: string;
}
export declare class GetConstraintPermutationsForEntitiesHeaders extends SpeakeasyBase {
    xAppToken?: string;
}
export declare class GetConstraintPermutationsForEntitiesRequest extends SpeakeasyBase {
    pathParams: GetConstraintPermutationsForEntitiesPathParams;
    queryParams: GetConstraintPermutationsForEntitiesQueryParams;
    headers: GetConstraintPermutationsForEntitiesHeaders;
}
export declare class GetConstraintPermutationsForEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
