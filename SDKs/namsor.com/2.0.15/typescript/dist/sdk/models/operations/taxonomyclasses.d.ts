import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaxonomyClassesPathParams extends SpeakeasyBase {
    classifierName: string;
}
export declare class TaxonomyClassesRequest extends SpeakeasyBase {
    pathParams: TaxonomyClassesPathParams;
}
export declare class TaxonomyClassesResponse extends SpeakeasyBase {
    apiClassifierTaxonomyOut?: shared.ApiClassifierTaxonomyOut;
    contentType: string;
    statusCode: number;
}
