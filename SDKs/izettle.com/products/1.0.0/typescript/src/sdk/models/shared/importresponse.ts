import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ImportResponseStateEnum {
    Importing = "IMPORTING"
,    FinishedSuccess = "FINISHED_SUCCESS"
,    FinishedFailed = "FINISHED_FAILED"
}


export class ImportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=finished" })
  finished?: Date;

  @Metadata({ data: "json, name=items" })
  items?: number;

  @Metadata({ data: "json, name=state" })
  state?: ImportResponseStateEnum;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;
}
