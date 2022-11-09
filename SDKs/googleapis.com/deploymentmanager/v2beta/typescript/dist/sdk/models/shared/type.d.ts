import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BaseType } from "./basetype";
import { TypeLabelEntry } from "./typelabelentry";
import { Operation } from "./operation";
/**
 * A resource type supported by Deployment Manager.
**/
export declare class Type extends SpeakeasyBase {
    base?: BaseType;
    description?: string;
    id?: string;
    insertTime?: string;
    labels?: TypeLabelEntry[];
    name?: string;
    operation?: Operation;
    selfLink?: string;
}
