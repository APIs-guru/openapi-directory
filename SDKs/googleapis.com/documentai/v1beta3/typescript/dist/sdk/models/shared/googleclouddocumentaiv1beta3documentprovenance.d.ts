import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentProvenanceParent } from "./googleclouddocumentaiv1beta3documentprovenanceparent";
export declare enum GoogleCloudDocumentaiV1beta3DocumentProvenanceTypeEnum {
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
export declare class GoogleCloudDocumentaiV1beta3DocumentProvenance extends SpeakeasyBase {
    id?: number;
    parents?: GoogleCloudDocumentaiV1beta3DocumentProvenanceParent[];
    revision?: number;
    type?: GoogleCloudDocumentaiV1beta3DocumentProvenanceTypeEnum;
}
