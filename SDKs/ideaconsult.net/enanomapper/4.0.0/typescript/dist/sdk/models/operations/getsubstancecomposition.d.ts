import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubstanceCompositionPathParams extends SpeakeasyBase {
    db: shared.AmbitDatabaseIdEnum;
    uuid: string;
}
export declare class GetSubstanceCompositionQueryParams extends SpeakeasyBase {
    all?: boolean;
    page?: number;
    pagesize?: number;
}
export declare class GetSubstanceCompositionRequest extends SpeakeasyBase {
    pathParams: GetSubstanceCompositionPathParams;
    queryParams: GetSubstanceCompositionQueryParams;
}
export declare class GetSubstanceCompositionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    substanceComposition?: shared.SubstanceComposition;
}
