import { SpeakeasyBase } from "../../../internal/utils";
import { ArrayValue } from "./arrayvalue";
import { Value } from "./value";
export declare enum FieldTransformSetToServerValueEnum {
    ServerValueUnspecified = "SERVER_VALUE_UNSPECIFIED",
    RequestTime = "REQUEST_TIME"
}
/**
 * A transformation of a field of the document.
**/
export declare class FieldTransform extends SpeakeasyBase {
    appendMissingElements?: ArrayValue;
    fieldPath?: string;
    increment?: Value;
    maximum?: Value;
    minimum?: Value;
    removeAllFromArray?: ArrayValue;
    setToServerValue?: FieldTransformSetToServerValueEnum;
}
