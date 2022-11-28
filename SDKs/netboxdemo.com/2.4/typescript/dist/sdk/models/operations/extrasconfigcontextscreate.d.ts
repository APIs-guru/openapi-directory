import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasConfigContextsCreateRequest extends SpeakeasyBase {
    request: shared.WritableConfigContextInput;
}
export declare class ExtrasConfigContextsCreateResponse extends SpeakeasyBase {
    configContext?: shared.ConfigContext;
    contentType: string;
    statusCode: number;
}
