import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorMessage } from "./errormessage";



export class BadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hints", elemType: ErrorMessage })
  hints?: ErrorMessage[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
