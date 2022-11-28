import { SpeakeasyBase } from "../../../internal/utils";
import { GetCallResponse } from "./getcallresponse";
/**
 * A list of call objects. See the [get details of a specific call](#getCall) response fields for a description of the nested objects
**/
export declare class GetCallsResponseEmbedded extends SpeakeasyBase {
    calls?: GetCallResponse[];
}
export declare class GetCallsResponseLinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetCallsResponseLinks extends SpeakeasyBase {
    self?: GetCallsResponseLinksSelf;
}
export declare class GetCallsResponse extends SpeakeasyBase {
    embedded?: GetCallsResponseEmbedded;
    links?: GetCallsResponseLinks;
    count?: number;
    pageSize?: number;
    recordIndex?: number;
}
