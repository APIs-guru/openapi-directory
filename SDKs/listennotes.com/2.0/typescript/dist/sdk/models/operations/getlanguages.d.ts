import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLanguagesHeaders extends SpeakeasyBase {
    xListenApiKey: string;
}
export declare class GetLanguagesRequest extends SpeakeasyBase {
    headers: GetLanguagesHeaders;
}
export declare class GetLanguagesResponse extends SpeakeasyBase {
    contentType: string;
    getLanguagesResponse?: shared.GetLanguagesResponse;
    headers: Map<string, string[]>;
    statusCode: number;
}
