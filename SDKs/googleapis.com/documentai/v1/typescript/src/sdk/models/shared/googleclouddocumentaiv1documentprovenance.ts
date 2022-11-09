import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1DocumentProvenanceParent } from "./googleclouddocumentaiv1documentprovenanceparent";

export enum GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum {
    OperationTypeUnspecified = "OPERATION_TYPE_UNSPECIFIED"
,    Add = "ADD"
,    Remove = "REMOVE"
,    Replace = "REPLACE"
,    EvalRequested = "EVAL_REQUESTED"
,    EvalApproved = "EVAL_APPROVED"
,    EvalSkipped = "EVAL_SKIPPED"
}


// GoogleCloudDocumentaiV1DocumentProvenance
/** 
 * Structure to identify provenance relationships between annotations in different revisions.
**/
export class GoogleCloudDocumentaiV1DocumentProvenance extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=parents", elemType: shared.GoogleCloudDocumentaiV1DocumentProvenanceParent })
  parents?: GoogleCloudDocumentaiV1DocumentProvenanceParent[];

  @Metadata({ data: "json, name=revision" })
  revision?: number;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum;
}
