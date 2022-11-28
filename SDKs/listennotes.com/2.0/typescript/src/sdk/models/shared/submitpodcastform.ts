import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubmitPodcastForm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=email;" })
  email?: string;

  @SpeakeasyMetadata({ data: "form, name=rss;" })
  rss: string;
}
