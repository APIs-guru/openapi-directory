import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAuthinfo200ApplicationJsonAuthMethodEnum {
    UserSession = "user_session"
,    Internal = "internal"
,    StaticApiKey = "static_api_key"
}


export class GetAuthinfo200ApplicationJsonPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=mutate" })
  mutate?: boolean;
}


export class GetAuthinfo200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=api_key_id" })
  apiKeyId?: string;

  @Metadata({ data: "json, name=auth_method" })
  authMethod?: GetAuthinfo200ApplicationJsonAuthMethodEnum;

  @Metadata({ data: "json, name=authenticated" })
  authenticated?: boolean;

  @Metadata({ data: "json, name=permissions" })
  permissions?: GetAuthinfo200ApplicationJsonPermissions;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=user_id" })
  userId?: string;
}


export class GetAuthinfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAuthinfo200ApplicationJsonObject?: GetAuthinfo200ApplicationJson;
}
