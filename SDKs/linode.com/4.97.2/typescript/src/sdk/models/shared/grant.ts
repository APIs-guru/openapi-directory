import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GrantPermissionsEnum {
    ReadOnly = "read_only",
    ReadWrite = "read_write"
}


// Grant
/** 
 * Represents the level of access a restricted User has to a specific resource on the Account.
 * 
**/
export class Grant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: GrantPermissionsEnum;
}


// GrantInput
/** 
 * Represents the level of access a restricted User has to a specific resource on the Account.
 * 
**/
export class GrantInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: GrantPermissionsEnum;
}
