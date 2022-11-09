import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum IterationClassificationTypeEnum {
    Multiclass = "Multiclass"
,    Multilabel = "Multilabel"
}


// Iteration
/** 
 * Iteration model to be sent over JSON
**/
export class Iteration extends SpeakeasyBase {
  @Metadata({ data: "json, name=classificationType, form, name=classificationType;" })
  classificationType?: IterationClassificationTypeEnum;

  @Metadata({ data: "json, name=created, form, name=created;" })
  created?: Date;

  @Metadata({ data: "json, name=domainId, form, name=domainId;" })
  domainId?: string;

  @Metadata({ data: "json, name=exportable, form, name=exportable;" })
  exportable?: boolean;

  @Metadata({ data: "json, name=id, form, name=id;" })
  id?: string;

  @Metadata({ data: "json, name=isDefault, form, name=isDefault;" })
  isDefault?: boolean;

  @Metadata({ data: "json, name=lastModified, form, name=lastModified;" })
  lastModified?: Date;

  @Metadata({ data: "json, name=name, form, name=name;" })
  name?: string;

  @Metadata({ data: "json, name=projectId, form, name=projectId;" })
  projectId?: string;

  @Metadata({ data: "json, name=status, form, name=status;" })
  status?: string;

  @Metadata({ data: "json, name=trainedAt, form, name=trainedAt;" })
  trainedAt?: Date;
}
