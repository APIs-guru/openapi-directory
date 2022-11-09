import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActivationResponseMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=rootContentId" })
  rootContentId?: string;
}


export class ActivationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=info" })
  info?: string;

  @Metadata({ data: "json, name=learnersCount" })
  learnersCount?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: ActivationResponseMetadata;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=start" })
  start?: string;
}
