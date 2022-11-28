import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentProvenanceParent } from "./googleclouddocumentaiv1beta2documentprovenanceparent";
export declare enum GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum {
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
export declare class GoogleCloudDocumentaiV1beta2DocumentProvenance extends SpeakeasyBase {
    id?: number;
    parents?: GoogleCloudDocumentaiV1beta2DocumentProvenanceParent[];
    revision?: number;
    type?: GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum;
}
