import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAuthinfo200ApplicationJsonAuthMethodEnum {
    UserSession = "user_session",
    Internal = "internal",
    StaticApiKey = "static_api_key"
}


export class GetAuthinfo200ApplicationJsonPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mutate" })
  mutate?: boolean;
}


export class GetAuthinfo200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_key_id" })
  apiKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=auth_method" })
  authMethod?: GetAuthinfo200ApplicationJsonAuthMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=authenticated" })
  authenticated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: GetAuthinfo200ApplicationJsonPermissions;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;
}


export class GetAuthinfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAuthinfo200ApplicationJsonObject?: GetAuthinfo200ApplicationJson;
}
