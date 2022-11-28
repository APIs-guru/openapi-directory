import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorDetail extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: string;

  @SpeakeasyMetadata()
  context?: Map<string, string[]>;

  @SpeakeasyMetadata()
  in?: string;

  @SpeakeasyMetadata()
  message: string;

  @SpeakeasyMetadata()
  subCategory?: string;
}
