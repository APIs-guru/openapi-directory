import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SynchronizationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=added" })
  added?: number;

  @Metadata({ data: "json, name=failed" })
  failed?: number;

  @Metadata({ data: "json, name=ignored" })
  ignored?: boolean;

  @Metadata({ data: "json, name=removed" })
  removed?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: number;
}
