import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ErrorResponseSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
