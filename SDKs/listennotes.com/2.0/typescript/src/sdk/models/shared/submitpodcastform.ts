import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubmitPodcastForm extends SpeakeasyBase {
  @Metadata({ data: "form, name=email;" })
  email?: string;

  @Metadata({ data: "form, name=rss;" })
  rss: string;
}
