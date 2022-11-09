import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SearchBySimilarityPathParams extends SpeakeasyBase {
    db: shared.AmbitDatabaseIdEnum;
}
export declare enum SearchBySimilarityTypeEnum {
    Smiles = "smiles",
    Mol = "mol",
    Url = "url"
}
export declare class SearchBySimilarityQueryParams extends SpeakeasyBase {
    b64search?: string;
    bundleUri?: string;
    datasetUri?: string;
    filterBySubstance?: boolean;
    mol?: boolean;
    page?: number;
    pagesize?: number;
    sameas?: string;
    search?: string;
    threshold?: number;
    type?: SearchBySimilarityTypeEnum;
}
export declare class SearchBySimilarityRequest extends SpeakeasyBase {
    pathParams: SearchBySimilarityPathParams;
    queryParams: SearchBySimilarityQueryParams;
}
export declare class SearchBySimilarityResponse extends SpeakeasyBase {
    contentType: string;
    dataset?: shared.Dataset;
    statusCode: number;
}
