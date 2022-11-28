import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";



export class ErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Error;
}
