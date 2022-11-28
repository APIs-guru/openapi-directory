import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInvestigationResultsPathParams extends SpeakeasyBase {
    db: shared.AmbitDatabaseIdEnum;
}
export declare enum GetInvestigationResultsTypeEnum {
    Byinvestigation = "byinvestigation",
    Byassay = "byassay",
    Bysubstance = "bysubstance",
    Byprovider = "byprovider",
    Bycitation = "bycitation",
    Bystudytype = "bystudytype",
    BystructureInchikey = "bystructure_inchikey",
    BystructureSmiles = "bystructure_smiles",
    BystructureName = "bystructure_name",
    BysubstanceName = "bysubstance_name",
    BysubstanceType = "bysubstance_type"
}
export declare class GetInvestigationResultsQueryParams extends SpeakeasyBase {
    id?: string;
    inchikey?: string;
    page?: number;
    pagesize?: number;
    search: string;
    type: GetInvestigationResultsTypeEnum;
}
export declare class GetInvestigationResultsRequest extends SpeakeasyBase {
    pathParams: GetInvestigationResultsPathParams;
    queryParams: GetInvestigationResultsQueryParams;
}
export declare class GetInvestigationResultsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    investigation?: shared.Investigation;
    statusCode: number;
}
