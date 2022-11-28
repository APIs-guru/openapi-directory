import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";



export class Error extends SpeakeasyBase {
  @SpeakeasyMetadata()
  category: string;

  @SpeakeasyMetadata()
  context?: Map<string, string[]>;

  @SpeakeasyMetadata()
  correlationId: string;

  @SpeakeasyMetadata({ elemType: ErrorDetail })
  errors?: ErrorDetail[];

  @SpeakeasyMetadata()
  links?: Map<string, string>;

  @SpeakeasyMetadata()
  message: string;

  @SpeakeasyMetadata()
  subCategory?: string;
}
