import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SearchByIdentifierRepresentationEnum {
    All = "all",
    Smiles = "smiles",
    Reach = "reach",
    Stdinchi = "stdinchi",
    Stdinchikey = "stdinchikey",
    Names = "names",
    IupacName = "iupac_name",
    Synonym = "synonym",
    Cas = "cas",
    Einecs = "einecs"
}
export declare enum SearchByIdentifierTermEnum {
    Search = "search",
    Url = "url",
    Inchikey = "inchikey"
}
export declare class SearchByIdentifierPathParams extends SpeakeasyBase {
    db: shared.AmbitDatabaseIdEnum;
    representation: SearchByIdentifierRepresentationEnum;
    term: SearchByIdentifierTermEnum;
}
export declare class SearchByIdentifierQueryParams extends SpeakeasyBase {
    b64search?: string;
    bundleUri?: string;
    casesens?: boolean;
    page?: number;
    pagesize?: number;
    sameas?: string;
    search?: string;
}
export declare class SearchByIdentifierRequest extends SpeakeasyBase {
    pathParams: SearchByIdentifierPathParams;
    queryParams: SearchByIdentifierQueryParams;
}
export declare class SearchByIdentifierResponse extends SpeakeasyBase {
    contentType: string;
    dataset?: shared.Dataset;
    statusCode: number;
}
