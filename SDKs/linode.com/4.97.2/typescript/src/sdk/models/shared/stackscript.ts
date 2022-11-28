import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserDefinedField } from "./userdefinedfield";



// StackScript
/** 
 * A StackScript enables you to quickly deploy a fully-configured application in an automated manner.
 * 
**/
export class StackScript extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=deployments_active" })
  deploymentsActive?: number;

  @SpeakeasyMetadata({ data: "json, name=deployments_total" })
  deploymentsTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=images" })
  images?: string[];

  @SpeakeasyMetadata({ data: "json, name=is_public" })
  isPublic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=mine" })
  mine?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rev_note" })
  revNote?: string;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;

  @SpeakeasyMetadata({ data: "json, name=user_defined_fields", elemType: UserDefinedField })
  userDefinedFields?: UserDefinedField[];

  @SpeakeasyMetadata({ data: "json, name=user_gravatar_id" })
  userGravatarId?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


// StackScriptInput
/** 
 * A StackScript enables you to quickly deploy a fully-configured application in an automated manner.
 * 
**/
export class StackScriptInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=images" })
  images?: string[];

  @SpeakeasyMetadata({ data: "json, name=is_public" })
  isPublic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=rev_note" })
  revNote?: string;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;
}
