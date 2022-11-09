import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InternalErrorMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
