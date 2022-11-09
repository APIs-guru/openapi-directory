import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserDefinedField } from "./userdefinedfield";


// StackScript
/** 
 * A StackScript enables you to quickly deploy a fully-configured application in an automated manner.
 * 
**/
export class StackScript extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=deployments_active" })
  deploymentsActive?: number;

  @Metadata({ data: "json, name=deployments_total" })
  deploymentsTotal?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=images" })
  images?: string[];

  @Metadata({ data: "json, name=is_public" })
  isPublic?: boolean;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=mine" })
  mine?: boolean;

  @Metadata({ data: "json, name=rev_note" })
  revNote?: string;

  @Metadata({ data: "json, name=script" })
  script?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;

  @Metadata({ data: "json, name=user_defined_fields", elemType: shared.UserDefinedField })
  userDefinedFields?: UserDefinedField[];

  @Metadata({ data: "json, name=user_gravatar_id" })
  userGravatarId?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
