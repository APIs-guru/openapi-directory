import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PredictionQueryTokenOrderByEnum {
    Newest = "Newest",
    Oldest = "Oldest",
    Suggested = "Suggested"
}


export class PredictionQueryToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Application" })
  application?: string;

  @SpeakeasyMetadata({ data: "json, name=Continuation" })
  continuation?: string;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=IterationId" })
  iterationId?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxCount" })
  maxCount?: number;

  @SpeakeasyMetadata({ data: "json, name=OrderBy" })
  orderBy?: PredictionQueryTokenOrderByEnum;

  @SpeakeasyMetadata({ data: "json, name=Session" })
  session?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
