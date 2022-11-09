import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomClass } from "./customclass";
/**
 * Message sent by the client for the `CreateCustomClass` method.
**/
export declare class CreateCustomClassRequest extends SpeakeasyBase {
    customClass?: CustomClass;
    customClassId?: string;
}
