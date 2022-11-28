import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasGraphsListQueryParams extends SpeakeasyBase {
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    limit?: number;
    name?: string;
    nameIc?: string;
    nameIe?: string;
    nameIew?: string;
    nameIsw?: string;
    nameN?: string;
    nameNic?: string;
    nameNie?: string;
    nameNiew?: string;
    nameNisw?: string;
    offset?: number;
    templateLanguage?: string;
    templateLanguageN?: string;
    type?: string;
    typeN?: string;
}
export declare class ExtrasGraphsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Graph[];
}
export declare class ExtrasGraphsListRequest extends SpeakeasyBase {
    queryParams: ExtrasGraphsListQueryParams;
}
export declare class ExtrasGraphsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    extrasGraphsList200ApplicationJsonObject?: ExtrasGraphsList200ApplicationJson;
}
