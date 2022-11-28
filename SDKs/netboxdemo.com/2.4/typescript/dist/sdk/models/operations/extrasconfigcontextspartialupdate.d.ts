import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasConfigContextsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class ExtrasConfigContextsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: ExtrasConfigContextsPartialUpdatePathParams;
    request: shared.WritableConfigContextInput;
}
export declare class ExtrasConfigContextsPartialUpdateResponse extends SpeakeasyBase {
    configContext?: shared.ConfigContext;
    contentType: string;
    statusCode: number;
}
