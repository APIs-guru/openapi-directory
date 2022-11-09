import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum SolrqueryGetWtEnum {
    Json = "json",
    Xml = "xml",
    Csv = "csv"
}
export declare class SolrqueryGetQueryParams extends SpeakeasyBase {
    fl?: string;
    fq?: string;
    q?: string;
    rows?: number;
    start?: number;
    wt?: SolrqueryGetWtEnum;
}
export declare class SolrqueryGetRequest extends SpeakeasyBase {
    queryParams: SolrqueryGetQueryParams;
}
export declare class SolrqueryGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    solrResponse?: shared.SolrResponse;
    statusCode: number;
}
