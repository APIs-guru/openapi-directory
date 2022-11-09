import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ErrorUnauthorized extends SpeakeasyBase {
  @Metadata({ data: "json, name=error_title" })
  errorTitle: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
