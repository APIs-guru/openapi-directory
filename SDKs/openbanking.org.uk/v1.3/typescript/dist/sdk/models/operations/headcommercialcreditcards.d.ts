import { SpeakeasyBase } from "../../../internal/utils";
export declare class HeadCommercialCreditCardsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
    ifNoneMatch?: string;
}
export declare class HeadCommercialCreditCardsRequest extends SpeakeasyBase {
    headers: HeadCommercialCreditCardsHeaders;
}
export declare class HeadCommercialCreditCardsResponse extends SpeakeasyBase {
    contentType: string;
    noResponse?: Map<string, any>;
    statusCode: number;
}
