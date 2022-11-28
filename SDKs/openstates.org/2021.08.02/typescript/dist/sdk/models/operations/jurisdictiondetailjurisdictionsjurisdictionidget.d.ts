import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JurisdictionDetailJurisdictionsJurisdictionIdGetPathParams extends SpeakeasyBase {
    jurisdictionId: string;
}
export declare class JurisdictionDetailJurisdictionsJurisdictionIdGetQueryParams extends SpeakeasyBase {
    apikey?: string;
    include?: shared.JurisdictionIncludeEnum[];
}
export declare class JurisdictionDetailJurisdictionsJurisdictionIdGetHeaders extends SpeakeasyBase {
    xApiKey?: string;
}
export declare class JurisdictionDetailJurisdictionsJurisdictionIdGetRequest extends SpeakeasyBase {
    pathParams: JurisdictionDetailJurisdictionsJurisdictionIdGetPathParams;
    queryParams: JurisdictionDetailJurisdictionsJurisdictionIdGetQueryParams;
    headers: JurisdictionDetailJurisdictionsJurisdictionIdGetHeaders;
}
export declare class JurisdictionDetailJurisdictionsJurisdictionIdGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    jurisdiction?: shared.Jurisdiction;
    statusCode: number;
}
