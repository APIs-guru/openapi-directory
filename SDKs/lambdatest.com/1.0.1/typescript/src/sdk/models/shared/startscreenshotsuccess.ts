import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartScreenshotSuccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=test_id" })
  testId?: string;
}
