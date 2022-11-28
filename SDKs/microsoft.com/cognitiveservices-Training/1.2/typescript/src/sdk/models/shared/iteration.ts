import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IterationInput
/** 
 * Iteration model to be sent over JSON
**/
export class IterationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IsDefault, form, name=IsDefault;" })
  isDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;
}


// Iteration
/** 
 * Iteration model to be sent over JSON
**/
export class Iteration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=DomainId" })
  domainId?: string;

  @SpeakeasyMetadata({ data: "json, name=Exportable" })
  exportable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=IsDefault" })
  isDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ProjectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=TrainedAt" })
  trainedAt?: Date;
}
