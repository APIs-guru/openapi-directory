import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GrantPermissionsEnum {
    ReadOnly = "read_only"
,    ReadWrite = "read_write"
}


// Grant
/** 
 * Represents the level of access a restricted User has to a specific resource on the Account.
 * 
**/
export class Grant extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=permissions" })
  permissions?: GrantPermissionsEnum;
}
