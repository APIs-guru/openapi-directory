import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ErskineMayChapterOverview } from "./erskinemaychapteroverview";


export class ErskineMayPart extends SpeakeasyBase {
  @Metadata({ data: "json, name=chapters", elemType: shared.ErskineMayChapterOverview })
  chapters?: ErskineMayChapterOverview[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=number" })
  number?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
