import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorForbidden extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}
