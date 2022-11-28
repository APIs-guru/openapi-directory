import { SpeakeasyBase } from "../../../internal/utils";
import { ImportFile } from "./importfile";
export declare enum TemplateContentsInterpreterEnum {
    UnknownInterpreter = "UNKNOWN_INTERPRETER",
    Python = "PYTHON",
    Jinja = "JINJA"
}
/**
 * Files that make up the template contents of a template type.
**/
export declare class TemplateContents extends SpeakeasyBase {
    imports?: ImportFile[];
    interpreter?: TemplateContentsInterpreterEnum;
    mainTemplate?: string;
    schema?: string;
    template?: string;
}
