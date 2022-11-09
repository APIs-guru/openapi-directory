import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ErrorDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=context" })
  context?: Map<string, string[]>;

  @Metadata({ data: "json, name=in" })
  in?: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=subCategory" })
  subCategory?: string;
}
