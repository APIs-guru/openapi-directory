import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { File } from "./file";
import { EnvironmentVariable } from "./environmentvariable";



// Process
/** 
 * Represents an operating system process.
**/
export class Process extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=args" })
  args?: string[];

  @SpeakeasyMetadata({ data: "json, name=argumentsTruncated" })
  argumentsTruncated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=binary" })
  binary?: File;

  @SpeakeasyMetadata({ data: "json, name=envVariables", elemType: EnvironmentVariable })
  envVariables?: EnvironmentVariable[];

  @SpeakeasyMetadata({ data: "json, name=envVariablesTruncated" })
  envVariablesTruncated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=libraries", elemType: File })
  libraries?: File[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentPid" })
  parentPid?: string;

  @SpeakeasyMetadata({ data: "json, name=pid" })
  pid?: string;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: File;
}
