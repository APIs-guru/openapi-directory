import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ErrorNotFound extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=status" })
  status?: number;
}
