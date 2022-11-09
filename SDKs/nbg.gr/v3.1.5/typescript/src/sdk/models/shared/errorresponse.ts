import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ErrorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;
}
