import { SpeakeasyBase } from "../../../internal/utils";
export declare class SolrResponseResponse extends SpeakeasyBase {
    docs?: Map<string, any>[];
    maxScore?: number;
    numFound?: number;
    start?: number;
}
export declare class SolrResponseResponseHeader extends SpeakeasyBase {
    qTime?: number;
    params?: Map<string, any>;
    status?: number;
    zkConnected?: boolean;
}
export declare class SolrResponse extends SpeakeasyBase {
    response?: SolrResponseResponse;
    responseHeader?: SolrResponseResponseHeader;
}
