import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PersonalAccessToken
/** 
 * A Personal Access Token is a token generated manually to access the API without going through an OAuth login.  Personal Access Tokens can have scopes just like OAuth tokens do, and are commonly used to give access to command-line tools like the Linode CLI, or when writing your own integrations.
 * 
**/
export class PersonalAccessToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=expiry" })
  expiry?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=scopes" })
  scopes?: string;

  @Metadata({ data: "json, name=token" })
  token?: string;
}
