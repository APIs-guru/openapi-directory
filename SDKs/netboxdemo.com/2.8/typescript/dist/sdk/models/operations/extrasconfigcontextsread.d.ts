import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasConfigContextsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class ExtrasConfigContextsReadRequest extends SpeakeasyBase {
    pathParams: ExtrasConfigContextsReadPathParams;
}
export declare class ExtrasConfigContextsReadResponse extends SpeakeasyBase {
    configContext?: shared.ConfigContext;
    contentType: string;
    statusCode: number;
}
