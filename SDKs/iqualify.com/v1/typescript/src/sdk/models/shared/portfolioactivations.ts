import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PortfolioActivationsMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rootContentId" })
  rootContentId?: string;
}


export class PortfolioActivations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentId" })
  contentId?: string;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: string;

  @SpeakeasyMetadata({ data: "json, name=learnersCount" })
  learnersCount?: number;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: PortfolioActivationsMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: Date;
}
