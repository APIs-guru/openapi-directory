import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SynchronizationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added" })
  added?: number;

  @SpeakeasyMetadata({ data: "json, name=failed" })
  failed?: number;

  @SpeakeasyMetadata({ data: "json, name=ignored" })
  ignored?: boolean;

  @SpeakeasyMetadata({ data: "json, name=removed" })
  removed?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: number;
}
