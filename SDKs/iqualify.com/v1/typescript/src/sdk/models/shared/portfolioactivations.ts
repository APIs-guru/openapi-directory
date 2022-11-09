import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PortfolioActivationsMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=rootContentId" })
  rootContentId?: string;
}


export class PortfolioActivations extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentId" })
  contentId?: string;

  @Metadata({ data: "json, name=end" })
  end?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=info" })
  info?: string;

  @Metadata({ data: "json, name=learnersCount" })
  learnersCount?: number;

  @Metadata({ data: "json, name=metadata" })
  metadata?: PortfolioActivationsMetadata;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=start" })
  start?: Date;
}
