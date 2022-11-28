import { SpeakeasyBase } from "../../../internal/utils";
import { UserDefinedField } from "./userdefinedfield";
/**
 * A StackScript enables you to quickly deploy a fully-configured application in an automated manner.
 *
**/
export declare class StackScript extends SpeakeasyBase {
    created?: Date;
    deploymentsActive?: number;
    deploymentsTotal?: number;
    description?: string;
    id?: number;
    images?: string[];
    isPublic?: boolean;
    label?: string;
    mine?: boolean;
    revNote?: string;
    script?: string;
    updated?: Date;
    userDefinedFields?: UserDefinedField[];
    userGravatarId?: string;
    username?: string;
}
/**
 * A StackScript enables you to quickly deploy a fully-configured application in an automated manner.
 *
**/
export declare class StackScriptInput extends SpeakeasyBase {
    description?: string;
    images?: string[];
    isPublic?: boolean;
    label?: string;
    revNote?: string;
    script?: string;
}
