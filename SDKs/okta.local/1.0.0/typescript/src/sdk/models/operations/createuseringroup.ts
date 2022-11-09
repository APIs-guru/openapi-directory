import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateUserInGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=activate" })
  activate?: string;
}


export class CreateUserInGroupRequestBodyProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=login" })
  login?: string;
}


export class CreateUserInGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupIds" })
  groupIds?: string[];

  @Metadata({ data: "json, name=profile" })
  profile?: CreateUserInGroupRequestBodyProfile;
}


export class CreateUserInGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateUserInGroupQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateUserInGroupRequestBody;
}


export class CreateUserInGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
