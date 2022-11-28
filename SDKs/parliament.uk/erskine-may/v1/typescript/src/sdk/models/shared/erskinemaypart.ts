import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErskineMayChapterOverview } from "./erskinemaychapteroverview";



export class ErskineMayPart extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chapters", elemType: ErskineMayChapterOverview })
  chapters?: ErskineMayChapterOverview[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
