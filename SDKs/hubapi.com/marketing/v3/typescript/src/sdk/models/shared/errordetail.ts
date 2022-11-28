import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=in" })
  in?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=subCategory" })
  subCategory?: string;
}
