import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JurisdictionListJurisdictionsGetQueryParams extends SpeakeasyBase {
    apikey?: string;
    classification?: shared.JurisdictionClassificationEnum;
    include?: shared.JurisdictionIncludeEnum[];
    page?: number;
    perPage?: number;
}
export declare class JurisdictionListJurisdictionsGetHeaders extends SpeakeasyBase {
    xApiKey?: string;
}
export declare class JurisdictionListJurisdictionsGetRequest extends SpeakeasyBase {
    queryParams: JurisdictionListJurisdictionsGetQueryParams;
    headers: JurisdictionListJurisdictionsGetHeaders;
}
export declare class JurisdictionListJurisdictionsGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    jurisdictionList?: shared.JurisdictionList;
    statusCode: number;
}
