import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IamPolicy } from "./iampolicy";
/**
 * Represents the information of a namespace
**/
export declare class Namespace extends SpeakeasyBase {
    iamPolicy?: IamPolicy;
    name?: string;
}
