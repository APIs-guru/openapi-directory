import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportFile } from "./importfile";


export enum TemplateContentsInterpreterEnum {
    UnknownInterpreter = "UNKNOWN_INTERPRETER",
    Python = "PYTHON",
    Jinja = "JINJA"
}


// TemplateContents
/** 
 * Files that make up the template contents of a template type.
**/
export class TemplateContents extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imports", elemType: ImportFile })
  imports?: ImportFile[];

  @SpeakeasyMetadata({ data: "json, name=interpreter" })
  interpreter?: TemplateContentsInterpreterEnum;

  @SpeakeasyMetadata({ data: "json, name=mainTemplate" })
  mainTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: string;
}
