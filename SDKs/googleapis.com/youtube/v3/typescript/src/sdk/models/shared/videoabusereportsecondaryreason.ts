import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VideoAbuseReportSecondaryReason extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;
}
