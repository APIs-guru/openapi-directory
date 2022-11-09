import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Status } from "./status";


export class BulkEditAssignedTargetingOptionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Status })
  errors?: Status[];

  @Metadata({ data: "json, name=failedLineItemIds" })
  failedLineItemIds?: string[];

  @Metadata({ data: "json, name=updatedLineItemIds" })
  updatedLineItemIds?: string[];
}
