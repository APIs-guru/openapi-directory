import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";



export class BulkEditAssignedTargetingOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: Status })
  errors?: Status[];

  @SpeakeasyMetadata({ data: "json, name=failedLineItemIds" })
  failedLineItemIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=updatedLineItemIds" })
  updatedLineItemIds?: string[];
}
