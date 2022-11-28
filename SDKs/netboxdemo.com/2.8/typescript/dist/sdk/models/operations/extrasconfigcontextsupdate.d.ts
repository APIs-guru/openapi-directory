import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasConfigContextsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class ExtrasConfigContextsUpdateRequest extends SpeakeasyBase {
    pathParams: ExtrasConfigContextsUpdatePathParams;
    request: shared.WritableConfigContextInput;
}
export declare class ExtrasConfigContextsUpdateResponse extends SpeakeasyBase {
    configContext?: shared.ConfigContext;
    contentType: string;
    statusCode: number;
}
