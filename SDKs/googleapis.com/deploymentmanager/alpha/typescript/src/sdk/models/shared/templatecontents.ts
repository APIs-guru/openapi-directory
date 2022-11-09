import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImportFile } from "./importfile";

export enum TemplateContentsInterpreterEnum {
    UnknownInterpreter = "UNKNOWN_INTERPRETER"
,    Python = "PYTHON"
,    Jinja = "JINJA"
}


// TemplateContents
/** 
 * Files that make up the template contents of a template type.
**/
export class TemplateContents extends SpeakeasyBase {
  @Metadata({ data: "json, name=imports", elemType: shared.ImportFile })
  imports?: ImportFile[];

  @Metadata({ data: "json, name=interpreter" })
  interpreter?: TemplateContentsInterpreterEnum;

  @Metadata({ data: "json, name=mainTemplate" })
  mainTemplate?: string;

  @Metadata({ data: "json, name=schema" })
  schema?: string;

  @Metadata({ data: "json, name=template" })
  template?: string;
}
