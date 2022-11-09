import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Option } from "./option";

export enum MethodSyntaxEnum {
    SyntaxProto2 = "SYNTAX_PROTO2"
,    SyntaxProto3 = "SYNTAX_PROTO3"
}


// Method
/** 
 * Method represents a method of an API interface.
**/
export class Method extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=options", elemType: shared.Option })
  options?: Option[];

  @Metadata({ data: "json, name=requestStreaming" })
  requestStreaming?: boolean;

  @Metadata({ data: "json, name=requestTypeUrl" })
  requestTypeUrl?: string;

  @Metadata({ data: "json, name=responseStreaming" })
  responseStreaming?: boolean;

  @Metadata({ data: "json, name=responseTypeUrl" })
  responseTypeUrl?: string;

  @Metadata({ data: "json, name=syntax" })
  syntax?: MethodSyntaxEnum;
}
