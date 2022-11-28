import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchBySmartsPathParams extends SpeakeasyBase {
    db: shared.AmbitDatabaseIdEnum;
}
export declare enum SearchBySmartsTypeEnum {
    Smiles = "smiles",
    Mol = "mol",
    Url = "url"
}
export declare class SearchBySmartsQueryParams extends SpeakeasyBase {
    b64search?: string;
    bundleUri?: string;
    datasetUri?: string;
    filterBySubstance?: boolean;
    mol?: boolean;
    page?: number;
    pagesize?: number;
    sameas?: string;
    search?: string;
    type?: SearchBySmartsTypeEnum;
}
export declare class SearchBySmartsRequest extends SpeakeasyBase {
    pathParams: SearchBySmartsPathParams;
    queryParams: SearchBySmartsQueryParams;
}
export declare class SearchBySmartsResponse extends SpeakeasyBase {
    contentType: string;
    dataset?: shared.Dataset;
    statusCode: number;
}
