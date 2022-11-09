import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConstraintViolation } from "./constraintviolation";


export class ErrorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=developerMessage" })
  developerMessage?: string;

  @Metadata({ data: "json, name=errorType" })
  errorType?: string;

  @Metadata({ data: "json, name=violations", elemType: shared.ConstraintViolation })
  violations?: ConstraintViolation[];
}
