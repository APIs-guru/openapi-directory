import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum IterationClassificationTypeEnum {
    Multiclass = "Multiclass",
    Multilabel = "Multilabel"
}


// Iteration
/** 
 * Iteration model to be sent over JSON
**/
export class Iteration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classificationType" })
  classificationType?: IterationClassificationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=domainId" })
  domainId?: string;

  @SpeakeasyMetadata({ data: "json, name=exportable" })
  exportable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isDefault" })
  isDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=trainedAt" })
  trainedAt?: Date;
}


// IterationInput
/** 
 * Iteration model to be sent over JSON
**/
export class IterationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDefault, form, name=isDefault;" })
  isDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name, form, name=name;" })
  name?: string;
}
