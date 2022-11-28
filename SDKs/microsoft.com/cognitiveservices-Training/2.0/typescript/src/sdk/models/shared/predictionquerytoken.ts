import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PredictionQueryTokenOrderByEnum {
    Newest = "Newest",
    Oldest = "Oldest",
    Suggested = "Suggested"
}


export class PredictionQueryToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application" })
  application?: string;

  @SpeakeasyMetadata({ data: "json, name=continuation" })
  continuation?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=iterationId" })
  iterationId?: string;

  @SpeakeasyMetadata({ data: "json, name=maxCount" })
  maxCount?: number;

  @SpeakeasyMetadata({ data: "json, name=orderBy" })
  orderBy?: PredictionQueryTokenOrderByEnum;

  @SpeakeasyMetadata({ data: "json, name=session" })
  session?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;
}
