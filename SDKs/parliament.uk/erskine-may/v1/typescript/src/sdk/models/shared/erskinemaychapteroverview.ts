import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErskineMaySectionOverview } from "./erskinemaysectionoverview";



export class ErskineMayChapterOverview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: number;

  @SpeakeasyMetadata({ data: "json, name=partNumber" })
  partNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=sections", elemType: ErskineMaySectionOverview })
  sections?: ErskineMaySectionOverview[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
