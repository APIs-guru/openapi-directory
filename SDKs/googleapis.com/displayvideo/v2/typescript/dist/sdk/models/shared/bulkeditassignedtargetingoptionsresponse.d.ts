import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
export declare class BulkEditAssignedTargetingOptionsResponse extends SpeakeasyBase {
    errors?: Status[];
    failedLineItemIds?: string[];
    updatedLineItemIds?: string[];
}
