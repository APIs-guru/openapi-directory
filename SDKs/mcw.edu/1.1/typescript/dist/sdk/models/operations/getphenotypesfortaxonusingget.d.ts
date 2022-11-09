import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetPhenotypesForTaxonUsingGetPathParams extends SpeakeasyBase {
    taxonId: string;
}
export declare class GetPhenotypesForTaxonUsingGetRequest extends SpeakeasyBase {
    pathParams: GetPhenotypesForTaxonUsingGetPathParams;
}
export declare class GetPhenotypesForTaxonUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
