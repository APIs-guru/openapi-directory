import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomErrorRule } from "./customerrorrule";


// CustomError
/** 
 * Customize service error responses. For example, list any service specific protobuf types that can appear in error detail lists of error responses. Example: custom_error: types: - google.foo.v1.CustomError - google.foo.v1.AnotherError
**/
export class CustomError extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: shared.CustomErrorRule })
  rules?: CustomErrorRule[];

  @Metadata({ data: "json, name=types" })
  types?: string[];
}
