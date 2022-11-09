import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartScreenshotSuccess extends SpeakeasyBase {
  @Metadata({ data: "json, name=test_id" })
  testId?: string;
}
