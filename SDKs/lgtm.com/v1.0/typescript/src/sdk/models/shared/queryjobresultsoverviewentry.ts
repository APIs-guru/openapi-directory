import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Project } from "./project";


export enum QueryjobResultsOverviewEntryStatusEnum {
    Success = "success",
    Error = "error"
}


export class QueryjobResultsOverviewEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=external" })
  external?: number;

  @SpeakeasyMetadata({ data: "json, name=internal" })
  internal?: number;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: Project;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: QueryjobResultsOverviewEntryStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
