import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentProvenanceParent } from "./googleclouddocumentaiv1documentprovenanceparent";


export enum GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum {
    OperationTypeUnspecified = "OPERATION_TYPE_UNSPECIFIED",
    Add = "ADD",
    Remove = "REMOVE",
    Replace = "REPLACE",
    EvalRequested = "EVAL_REQUESTED",
    EvalApproved = "EVAL_APPROVED",
    EvalSkipped = "EVAL_SKIPPED"
}


// GoogleCloudDocumentaiV1DocumentProvenance
/** 
 * Structure to identify provenance relationships between annotations in different revisions.
**/
export class GoogleCloudDocumentaiV1DocumentProvenance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=parents", elemType: GoogleCloudDocumentaiV1DocumentProvenanceParent })
  parents?: GoogleCloudDocumentaiV1DocumentProvenanceParent[];

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum;
}
