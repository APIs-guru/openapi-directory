import { SpeakeasyBase } from "../../../internal/utils";
import { AsyncOptions } from "./asyncoptions";
import { InputMapping } from "./inputmapping";
import { ValidationOptions } from "./validationoptions";
/**
 * Options allows customized resource handling by Deployment Manager.
**/
export declare class Options extends SpeakeasyBase {
    asyncOptions?: AsyncOptions[];
    inputMappings?: InputMapping[];
    nameProperty?: string;
    validationOptions?: ValidationOptions;
}
