import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentProvenanceParent } from "./googleclouddocumentaiv1beta2documentprovenanceparent";


export enum GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum {
    OperationTypeUnspecified = "OPERATION_TYPE_UNSPECIFIED",
    Add = "ADD",
    Remove = "REMOVE",
    Replace = "REPLACE",
    EvalRequested = "EVAL_REQUESTED",
    EvalApproved = "EVAL_APPROVED",
    EvalSkipped = "EVAL_SKIPPED"
}


// GoogleCloudDocumentaiV1beta2DocumentProvenance
/** 
 * Structure to identify provenance relationships between annotations in different revisions.
**/
export class GoogleCloudDocumentaiV1beta2DocumentProvenance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=parents", elemType: GoogleCloudDocumentaiV1beta2DocumentProvenanceParent })
  parents?: GoogleCloudDocumentaiV1beta2DocumentProvenanceParent[];

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum;
}
