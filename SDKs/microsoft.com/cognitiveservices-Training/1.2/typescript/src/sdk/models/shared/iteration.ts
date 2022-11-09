import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Iteration
/** 
 * Iteration model to be sent over JSON
**/
export class Iteration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Created, form, name=Created;" })
  created?: Date;

  @Metadata({ data: "json, name=DomainId, form, name=DomainId;" })
  domainId?: string;

  @Metadata({ data: "json, name=Exportable, form, name=Exportable;" })
  exportable?: boolean;

  @Metadata({ data: "json, name=Id, form, name=Id;" })
  id?: string;

  @Metadata({ data: "json, name=IsDefault, form, name=IsDefault;" })
  isDefault?: boolean;

  @Metadata({ data: "json, name=LastModified, form, name=LastModified;" })
  lastModified?: Date;

  @Metadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;

  @Metadata({ data: "json, name=ProjectId, form, name=ProjectId;" })
  projectId?: string;

  @Metadata({ data: "json, name=Status, form, name=Status;" })
  status?: string;

  @Metadata({ data: "json, name=TrainedAt, form, name=TrainedAt;" })
  trainedAt?: Date;
}
