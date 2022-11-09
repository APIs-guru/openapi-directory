import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { File } from "./file";
import { EnvironmentVariable } from "./environmentvariable";
import { File } from "./file";
import { File } from "./file";


// Process
/** 
 * Represents an operating system process.
**/
export class Process extends SpeakeasyBase {
  @Metadata({ data: "json, name=args" })
  args?: string[];

  @Metadata({ data: "json, name=argumentsTruncated" })
  argumentsTruncated?: boolean;

  @Metadata({ data: "json, name=binary" })
  binary?: File;

  @Metadata({ data: "json, name=envVariables", elemType: shared.EnvironmentVariable })
  envVariables?: EnvironmentVariable[];

  @Metadata({ data: "json, name=envVariablesTruncated" })
  envVariablesTruncated?: boolean;

  @Metadata({ data: "json, name=libraries", elemType: shared.File })
  libraries?: File[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentPid" })
  parentPid?: string;

  @Metadata({ data: "json, name=pid" })
  pid?: string;

  @Metadata({ data: "json, name=script" })
  script?: File;
}
