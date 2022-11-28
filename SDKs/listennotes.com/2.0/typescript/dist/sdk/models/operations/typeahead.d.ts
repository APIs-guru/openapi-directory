import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TypeaheadQueryParams extends SpeakeasyBase {
    q: string;
    safeMode?: number;
    showGenres?: number;
    showPodcasts?: number;
}
export declare class TypeaheadHeaders extends SpeakeasyBase {
    xListenApiKey: string;
}
export declare class TypeaheadRequest extends SpeakeasyBase {
    queryParams: TypeaheadQueryParams;
    headers: TypeaheadHeaders;
}
export declare class TypeaheadResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    typeaheadResponse?: shared.TypeaheadResponse;
}
