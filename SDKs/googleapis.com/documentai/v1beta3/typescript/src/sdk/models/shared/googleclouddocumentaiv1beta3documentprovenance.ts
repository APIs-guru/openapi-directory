import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentProvenanceParent } from "./googleclouddocumentaiv1beta3documentprovenanceparent";


export enum GoogleCloudDocumentaiV1beta3DocumentProvenanceTypeEnum {
    OperationTypeUnspecified = "OPERATION_TYPE_UNSPECIFIED",
    Add = "ADD",
    Remove = "REMOVE",
    Replace = "REPLACE",
    EvalRequested = "EVAL_REQUESTED",
    EvalApproved = "EVAL_APPROVED",
    EvalSkipped = "EVAL_SKIPPED"
}


// GoogleCloudDocumentaiV1beta3DocumentProvenance
/** 
 * Structure to identify provenance relationships between annotations in different revisions.
**/
export class GoogleCloudDocumentaiV1beta3DocumentProvenance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=parents", elemType: GoogleCloudDocumentaiV1beta3DocumentProvenanceParent })
  parents?: GoogleCloudDocumentaiV1beta3DocumentProvenanceParent[];

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDocumentaiV1beta3DocumentProvenanceTypeEnum;
}
