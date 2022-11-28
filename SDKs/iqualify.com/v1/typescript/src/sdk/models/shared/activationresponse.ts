import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActivationResponseMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rootContentId" })
  rootContentId?: string;
}


export class ActivationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: string;

  @SpeakeasyMetadata({ data: "json, name=learnersCount" })
  learnersCount?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ActivationResponseMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: string;
}
