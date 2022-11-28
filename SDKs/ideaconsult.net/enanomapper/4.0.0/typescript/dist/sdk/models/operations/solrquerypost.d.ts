import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SolrqueryPostWtEnum {
    Json = "json",
    Xml = "xml"
}
export declare class SolrqueryPostQueryParams extends SpeakeasyBase {
    wt?: SolrqueryPostWtEnum;
}
export declare class SolrqueryPostRequestBodyParams extends SpeakeasyBase {
    fl?: string[];
    rows?: number;
}
export declare class SolrqueryPostRequestBody extends SpeakeasyBase {
    facet?: Map<string, any>;
    params?: SolrqueryPostRequestBodyParams;
}
export declare class SolrqueryPostRequest extends SpeakeasyBase {
    queryParams: SolrqueryPostQueryParams;
    request?: SolrqueryPostRequestBody;
}
export declare class SolrqueryPostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    solrResponse?: shared.SolrResponse;
    statusCode: number;
}
