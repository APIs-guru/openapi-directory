import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConstraintViolation } from "./constraintviolation";



export class ErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=developerMessage" })
  developerMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=errorType" })
  errorType?: string;

  @SpeakeasyMetadata({ data: "json, name=violations", elemType: ConstraintViolation })
  violations?: ConstraintViolation[];
}
