import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasTagsListQueryParams extends SpeakeasyBase {
    color?: string;
    colorIc?: string;
    colorIe?: string;
    colorIew?: string;
    colorIsw?: string;
    colorN?: string;
    colorNic?: string;
    colorNie?: string;
    colorNiew?: string;
    colorNisw?: string;
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
    q?: string;
    slug?: string;
    slugIc?: string;
    slugIe?: string;
    slugIew?: string;
    slugIsw?: string;
    slugN?: string;
    slugNic?: string;
    slugNie?: string;
    slugNiew?: string;
    slugNisw?: string;
}
export declare class ExtrasTagsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Tag[];
}
export declare class ExtrasTagsListRequest extends SpeakeasyBase {
    queryParams: ExtrasTagsListQueryParams;
}
export declare class ExtrasTagsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    extrasTagsList200ApplicationJsonObject?: ExtrasTagsList200ApplicationJson;
}
