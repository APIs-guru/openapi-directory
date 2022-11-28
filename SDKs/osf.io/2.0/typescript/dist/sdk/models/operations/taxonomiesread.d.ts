import { SpeakeasyBase } from "../../../internal/utils";
export declare class TaxonomiesReadPathParams extends SpeakeasyBase {
    taxonomyId: string;
}
export declare class TaxonomiesReadRequest extends SpeakeasyBase {
    pathParams: TaxonomiesReadPathParams;
}
export declare class TaxonomiesReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
