import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorResponseSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
