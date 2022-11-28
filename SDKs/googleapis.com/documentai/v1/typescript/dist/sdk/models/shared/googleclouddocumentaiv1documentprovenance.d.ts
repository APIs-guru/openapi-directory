import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentProvenanceParent } from "./googleclouddocumentaiv1documentprovenanceparent";
export declare enum GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum {
    OperationTypeUnspecified = "OPERATION_TYPE_UNSPECIFIED",
    Add = "ADD",
    Remove = "REMOVE",
    Replace = "REPLACE",
    EvalRequested = "EVAL_REQUESTED",
    EvalApproved = "EVAL_APPROVED",
    EvalSkipped = "EVAL_SKIPPED"
}
/**
 * Structure to identify provenance relationships between annotations in different revisions.
**/
export declare class GoogleCloudDocumentaiV1DocumentProvenance extends SpeakeasyBase {
    id?: number;
    parents?: GoogleCloudDocumentaiV1DocumentProvenanceParent[];
    revision?: number;
    type?: GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum;
}
