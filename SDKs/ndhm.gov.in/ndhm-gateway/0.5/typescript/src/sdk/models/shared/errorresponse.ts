import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Error } from "./error";


export class ErrorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Error;
}
