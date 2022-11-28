import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NameTypePathParams extends SpeakeasyBase {
    properNoun: string;
}
export declare class NameTypeSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class NameTypeRequest extends SpeakeasyBase {
    pathParams: NameTypePathParams;
    security: NameTypeSecurity;
}
export declare class NameTypeResponse extends SpeakeasyBase {
    contentType: string;
    properNounCategorizedOut?: shared.ProperNounCategorizedOut;
    statusCode: number;
}
