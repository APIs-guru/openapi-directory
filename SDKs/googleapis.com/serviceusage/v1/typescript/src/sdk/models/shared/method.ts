import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Option } from "./option";


export enum MethodSyntaxEnum {
    SyntaxProto2 = "SYNTAX_PROTO2",
    SyntaxProto3 = "SYNTAX_PROTO3"
}


// Method
/** 
 * Method represents a method of an API interface.
**/
export class Method extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=options", elemType: Option })
  options?: Option[];

  @SpeakeasyMetadata({ data: "json, name=requestStreaming" })
  requestStreaming?: boolean;

  @SpeakeasyMetadata({ data: "json, name=requestTypeUrl" })
  requestTypeUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=responseStreaming" })
  responseStreaming?: boolean;

  @SpeakeasyMetadata({ data: "json, name=responseTypeUrl" })
  responseTypeUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=syntax" })
  syntax?: MethodSyntaxEnum;
}
