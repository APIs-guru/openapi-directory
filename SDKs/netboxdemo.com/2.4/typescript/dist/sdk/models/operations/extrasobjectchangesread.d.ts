import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasObjectChangesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class ExtrasObjectChangesReadRequest extends SpeakeasyBase {
    pathParams: ExtrasObjectChangesReadPathParams;
}
export declare class ExtrasObjectChangesReadResponse extends SpeakeasyBase {
    contentType: string;
    objectChange?: shared.ObjectChange;
    statusCode: number;
}
