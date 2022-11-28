import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BackendRulePathTranslationEnum {
    PathTranslationUnspecified = "PATH_TRANSLATION_UNSPECIFIED",
    ConstantAddress = "CONSTANT_ADDRESS",
    AppendPathToAddress = "APPEND_PATH_TO_ADDRESS"
}
/**
 * A backend rule provides configuration for an individual API element.
**/
export declare class BackendRule extends SpeakeasyBase {
    address?: string;
    deadline?: number;
    disableAuth?: boolean;
    jwtAudience?: string;
    operationDeadline?: number;
    pathTranslation?: BackendRulePathTranslationEnum;
    protocol?: string;
    selector?: string;
}
