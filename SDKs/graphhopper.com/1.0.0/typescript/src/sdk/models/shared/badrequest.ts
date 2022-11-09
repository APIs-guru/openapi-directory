import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ErrorMessage } from "./errormessage";


export class BadRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=hints", elemType: shared.ErrorMessage })
  hints?: ErrorMessage[];

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
