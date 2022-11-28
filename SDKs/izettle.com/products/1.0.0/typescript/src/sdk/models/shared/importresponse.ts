import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ImportResponseStateEnum {
    Importing = "IMPORTING",
    FinishedSuccess = "FINISHED_SUCCESS",
    FinishedFailed = "FINISHED_FAILED"
}


export class ImportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished?: Date;

  @SpeakeasyMetadata({ data: "json, name=items" })
  items?: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ImportResponseStateEnum;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}
