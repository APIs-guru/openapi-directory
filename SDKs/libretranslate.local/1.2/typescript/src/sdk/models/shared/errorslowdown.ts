import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorSlowDown extends SpeakeasyBase {
  @SpeakeasyMetadata()
  error?: string;
}
