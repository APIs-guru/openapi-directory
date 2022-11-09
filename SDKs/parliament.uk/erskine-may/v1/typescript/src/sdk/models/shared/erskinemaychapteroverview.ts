import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ErskineMaySectionOverview } from "./erskinemaysectionoverview";


export class ErskineMayChapterOverview extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=number" })
  number?: number;

  @Metadata({ data: "json, name=partNumber" })
  partNumber?: number;

  @Metadata({ data: "json, name=sections", elemType: shared.ErskineMaySectionOverview })
  sections?: ErskineMaySectionOverview[];

  @Metadata({ data: "json, name=title" })
  title?: string;
}
